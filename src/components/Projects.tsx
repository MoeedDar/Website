import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import Icosahedron from './Icosahedron'
import Tetrahedron from './Tetrahedron'

type Project = {
    name: string
    description: string
    tags: string[]
    animation: JSX.Element
}

const projects: Project[] = [
    {
        name: 'Image Board',
        description: "4chan clone created using Go's standard http library, with markdown.",
        tags: ['Go', 'Http/Net', 'SQLite',],
        animation: <Icosahedron />
    },
    {
        name: 'N-Body Simulation',
        description: 'Using GPU compute via cuda to reduce an N body simulation from O(n^2) to O(n).',
        tags: ['C++', 'Physics', 'GPU Compute', 'Cuda'],
        animation: <Tetrahedron />
    },
]

function AnimatedDiv({ children, className, key }: React.ComponentProps<"div">) {
    return (
        <motion.div
            className={className}
            key={key}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    )
}

export default function Projects() {
    const [current, setCurrent] = useState<number>(0)

    const nextProject = (forward: boolean = true) => {
        let newCurrent = current

        if (forward)
            newCurrent++
        else newCurrent--

        if (current >= projects.length - 1)
            newCurrent = 0
        else if (current <= 0)
            newCurrent = projects.length - 1

        setCurrent(newCurrent)
    }

    return (
        <>
            <h2 className="font-bold font-serif mb-12 text-6xl">Projects.</h2>
            <div className="mx-auto text-center w-96">
                <AnimatePresence mode="wait">
                    <AnimatedDiv className="border-2 border-black h-96 mb-8 w-96" key={current}>
                        <Canvas>
                            {projects[current].animation}
                        </Canvas>
                    </AnimatedDiv>
                </AnimatePresence>

                <div className="text-4xl mb-4">
                    <button className="mx-4 mb-0" onClick={() => nextProject(false)}>‹</button>
                    <button className="mx-4 mb-0" onClick={() => nextProject()}>›</button>
                </div>

                <AnimatePresence mode="wait">
                    <AnimatedDiv className="text-4xl mb-8" key={current}>
                        {projects[current].name}
                    </AnimatedDiv>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <AnimatedDiv className="mb-8" key={current}>
                        {projects[current].description}
                    </AnimatedDiv>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <AnimatedDiv className="flex flex-row flex-wrap gap-4 justify-center" key={current}>
                        {projects[current].tags.map(t => <div className="tag-sm" key={t}>{t}</div>)}
                    </AnimatedDiv>
                </AnimatePresence>
            </div>
        </>
    )
}