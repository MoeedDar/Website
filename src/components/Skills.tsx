export default function Skills() {
    const skills = {
        "Languages": ["Javascript/Typescript", "Python", "Rust", "Java", "C++/C", "Go"],
        "Technologies": ["PyTorch", "NumPy", "Cuda", "React", "Next", "Tailwind"],
        "General": ["Full Stack", "Data Science", "Sales/Marketing", "Leadership", "Networking"],
    }

    return (
        <>
            <h2 className="font-bold font-serif mb-12 text-6xl">Skills.</h2>
            {Object.entries(skills).map(([key, value]) =>
                <div key={key}>
                    <p className="mb-4 text-lg">{key}</p>
                    <ul className="flex flex-row flex-wrap gap-8 mb-12">
                        {value.map(t => <li className="tag" key={t}>{t}</li>)}
                    </ul>
                </div>
            )}
        </>
    )
}