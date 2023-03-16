import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="font-mono grid grid-cols-3 h-16 text-xl w-full">
            <Link className="border-2 border-black hover:underline p-4" to="/">
                Home
            </Link>
            <Link className="border-black border-y-2 hover:underline p-4" to="/portfolio">
                Portfolio
            </Link>
            <Link className="border-2 border-black hover:underline p-4" to="/blog">
                Blog
            </Link>
        </div>
    )
}