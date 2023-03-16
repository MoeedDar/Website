import { motion } from 'framer-motion'
import { GrLinkedin, GrGithub } from 'react-icons/gr'
import AnimatedMesh from '../components/AnimatedMesh'

type HomeProps = {
    colours: string[]
    colour: string
    setColour: React.Dispatch<React.SetStateAction<string>>
}

export default function Home({ colours, colour, setColour }: HomeProps) {
    return (
        <motion.main
            className="flex flex-col flex-grow"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="border-x-2 border-b-2 border-black flex flex-none flex-row flex-wrap p-4">
                <h1 className="font-bold font-serif grow inline-flex text-8xl">Moeed Dar.</h1>
                <div className='flex flex-row gap-4 my-auto'>
                    {colours.map(c =>
                        <button
                            className={`${c} p-2 tag ${c !== colour ? 'shadow-[2px_2px_black]' : 'shadow-none'}`}
                            key={c}
                            onClick={() => setColour(c)}  
                        />
                    )}
                </div>
            </div>
            <div className="border-x-2 border-b-2 border-black grid grid-rows-2 grow lg:grid-cols-2 lg:grid-rows-1">
                <div className="border-b border-black flex-none overflow-hidden lg:border-b-0 lg:border-r-[1px] p-4">
                    <AnimatedMesh />
                </div>
                <div className="border-black border-t lg:border-l-[1px] lg:border-t-0 p-4">
                    <p className="font-bold mb-8">Mathematician - Physicist - Scientist - Philosopher - Entrepreneur - Programmer - Artist</p>
                    <p>Hey there! I am Moeed, an aspiring scientist and entrepreneur. I have a strong background in mathematics and physics which has instilled in me a passion for understanding the world through scientific exploration.</p>
                    <br />
                    <p>My goal is to use my skills and knowledge to contribute to the progress of humanity. To this end, I am currently building an AI note-taking app that builds a model of mind to facilitate healthier patterns of thought and habit.</p>
                    <br />
                    <p>When I'm not pursuing my entrepeneurial visions, you can often find me reading, meditating, playing the piano, practicing MMA or engaging in calisthenics. I believe physical and mental wellness are components of a holistic approach to living and that continually improving oneself can lead to a better life for everyone.</p>
                    <br />
                    <p>Ultimately, I am driven by a desire to make a positive impact on the world through the power of science and innovation. I believe that by working together and pushing the boundaries of what is possible, we can create a better future for ourselves and future generations.</p>
                    <br />
                    <p>Your's truly,</p>
                    <br />
                    <p>Moeed.</p>
                    <br />
                    <div className="flex flex-row gap-4 text-xl">
                        <a href="https://www.linkedin.com/in/moeeddar/"><GrLinkedin /></a>
                        <a href="https://github.com/MoeedDar/"><GrGithub /></a>
                    </div>
                </div>
            </div>
        </motion.main >
    )
}