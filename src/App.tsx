import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import Portfolio from './routes/Portfolio'
import Blog from './routes/Blog'

const colours = [
    'bg-neutral-100',
    'bg-neutral-500',
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-violet-500',
]

export default function App() {
    const [colour, setColour] = useState<typeof colours[number]>(colours[Math.floor(Math.random()*colours.length)])

    useEffect(() => console.log(colour),  [colour])

    return (
        <div className={`${colour} duration-400 flex flex-col font-mono max-w-screen min-h-screen p-1 transition-colors`}>
            <Navbar />
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<Home colours={colours} colour={colour} setColour={setColour} />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}