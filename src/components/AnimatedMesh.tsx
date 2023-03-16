import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Flex } from '@react-three/flex'

const Grid = ({ size = 3.4, divisions = 10 }) => {
    const ref = useRef<THREE.Mesh>(null!)

    const geometry = new THREE.BufferGeometry()
    const vertices = []
    const indices = []
    const step = size / divisions
    const halfSize = size / 2

    for (let i = 0; i <= divisions; i++) {
        const x = -halfSize + i * step
        for (let j = 0; j <= divisions; j++) {
            const z = -halfSize + j * step
            vertices.push(x, 0, z)
            if (i < divisions && j < divisions) {
                const a = i * (divisions + 1) + j
                const b = a + 1
                const c = a + (divisions + 1)
                const d = c + 1
                indices.push(a, b, c, b, d, c)
            }
        }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    geometry.setIndex(indices);

    const material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true })

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()
        const amplitude = 1.8
        const { array } = geometry.attributes.position as THREE.BufferAttribute
        let vertices: number[] = []

        for (let i = 0; i < array.length; i += 3) {
            const x = array[i]
            const z = array[i + 2]
            const y = amplitude * Math.sin(Math.PI * ((x + halfSize) / size)) * Math.sin(Math.PI * ((z + halfSize) / size)) * Math.sin(time * 0.7)//Math.sin(x * frequency + time) * Math.sin(z * frequency + time) * amplitude
            vertices = vertices.concat([x, y, z])
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
        ref.current && (ref.current.rotation.y = clock.getElapsedTime() * 0.3)
    })

    return (
        <mesh geometry={geometry} material={material} rotation={[Math.PI * 1.07, 0, 0]} ref={ref} />
    )
}

export default function AnimatedMesh() {
    return (
        <Canvas flat linear>
            <Flex>
                <Grid />
            </Flex>
        </Canvas>
    )
}