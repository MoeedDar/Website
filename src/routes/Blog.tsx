import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const tags = [
    'Mathematics',
    'Science',
    'Business',
    'Personal Development',
]

const postsThumbnails = [
    {
        id: "1",
        name: "Heat and Entropy",
        description: "In thermodynamics there are two types of energy, heat and work. But what distinguishes energy, from energy?",
        date: "12-02-2002",
        tags: ["thermodynamics", "energy"],
    },
    {
        id: "2",
        name: "Intro to React Hooks",
        description: "Learn how to use React hooks to build reusable and maintainable components.",
        date: "01-20-2022",
        tags: ["React", "hooks"],
    },
    {
        id: "3",
        name: "Building APIs with Node.js",
        description: "A tutorial on how to build RESTful APIs with Node.js and Express.",
        date: "05-15-2022",
        tags: ["Node.js", "Express", "APIs"],
    },
    {
        id: "4",
        name: "A Guide to CSS Grid",
        description: "CSS Grid is a powerful tool for creating responsive layouts. Learn the basics with this beginner's guide.",
        date: "03-10-2022",
        tags: ["CSS", "layout", "responsive design"],
    },
]

export default function Blog() {
    const [enabled, setEnabled] = useState<typeof tags[number][]>([])

    const enableTag = (tag: typeof tags[number]) => {
        if (enabled.includes(tag))
            setEnabled(enabled.filter(t => t !== tag))
        else setEnabled([...enabled, tag])
    }

    return (
        <motion.main
            className="flex flex-col flex-grow"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="border-b-2 border-black border-x-2 flex flex-row flex-wrap gap-4 p-4">
                {tags.map(t =>
                    <button
                        className={`tag ${enabled.includes(t) && 'shadow-none'}`}
                        onClick={() => enableTag(t)}
                    >
                        {t}
                    </button>
                )}
            </div>
            <div className="border-black border-x flex flex-row flex-wrap">
                {postsThumbnails.map((post, index) => (
                    <div key={index} className="border-b-2 border-black border-x lg:w-1/3 md:w-1/2 p-4 w-full">
                        <Link className="font-bold hover:underline mb-2 text-lg" to={post.id}>{post.name}</Link>
                        <p className="mb-2">{post.description}</p>
                        <p className="mb-4">{post.date}</p>
                        <div className="flex flex-row flex-wrap gap-4">
                            {post.tags.map((tag, index) => (
                                <div key={index} className="tag-sm">{tag}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.main>
    )
}