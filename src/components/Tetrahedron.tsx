import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Tetrahedron() {
    const ref = useRef<THREE.Mesh>(null!)

    useFrame(({ clock }) => {
        ref.current.rotation.x = clock.elapsedTime
        ref.current.rotation.y = clock.elapsedTime
    })

    return (
        <mesh ref={ref}>
            <tetrahedronBufferGeometry />
            <meshBasicMaterial color={0x000000} wireframe />
        </mesh>
    )
}