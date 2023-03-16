type Experience = {
    role: string
    company: string
    date: string
    accomplishments: string[]
}

const experiences: Experience[] = [
    {
        role: 'Junior Software Engineer',
        company: 'MediaTek',
        date: '2017-2017',
        accomplishments: ['Created user interface in Javascript for building IC test scripts']
    },
    {
        role: 'Mathematics and Physics Student',
        company: 'University of York',
        date: '2020-2022',
        accomplishments: ['Passed modules in thermodynamics, electromagnetism, linear algebra, vector calculus, quantum mechanics', 'Triweekly participation in MMA society']
    },
    {
        role: 'Founder/CEO',
        company: 'Holier Than Thou',
        date: '2022-2023',
        accomplishments: ['Managed social media marketing for clothing brand', 'Setup of shopify stores with conversion boosting plugins']
    },
    {
        role: 'Founder/CEO',
        company: 'Salestorm',
        date: '2022-2023',
        accomplishments: ['Built effective B2B SaaS sales pipelines', 'Converted two high ticket clients in first week of establishment']
    },
    {
        role: 'Founder/CEO',
        company: 'Quanta',
        date: '2022-Present',
        accomplishments: ['Full stack development of AI note taking app', 'Utilisation of graph and NLP machine learning models', 'Cross-function team leadership']
    },
]

export default function Experience() {
    return (
        <div className="w-full">
            <h2 className="font-bold font-serif mb-12 text-6xl">Experience</h2>
            <div className=" overflow-hidden w-full">
                {experiences.map(e => 
                    <div className="mb-8">
                        <p className="font-bold mb-2 text-xl">{e.role}</p>
                        <p className="mb-2 text-lg">{e.company}</p>
                        <p className="mb-2 text-lg">{e.date}</p>
                        <ul className="list-['-']">
                            {e.accomplishments.map(a => <li className="ml-4 pl-2">{a}</li>)}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}