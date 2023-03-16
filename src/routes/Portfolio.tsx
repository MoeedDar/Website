import { motion } from 'framer-motion'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'

export default function Portfolio() {
    return (
        <motion.main
            className="flex flex-col flex-grow"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="border-black border-b-2 border-x-2 flex flex-col flex-grow lg:flex-row">
                <div className="border-black border-b lg:border-b-0 lg:border-r p-4">
                    <Experience />
                </div>
                <div className="border-black border-t lg:border-l lg:border-r-2 lg:border-t-0 p-4">
                    <Skills />
                </div>
                <div className="border-black border-t-2 lg:border-t-0 p-4">
                    <Projects />
                </div>
            </div>
        </motion.main>
    )
}