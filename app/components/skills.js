import Image from "next/image"
export default function Skills({ projectsRef }) {
    return (
        <div className="w-[85%] min-h-[100vh] mx-auto">
            <div className="mx-auto text-center h-fit">
                <h1 className="text-4xl text-text_primary font-bold mb-3">Skills🔨</h1>
                <span className="text-slate-300">What i am Good At :-)</span>
            </div>
            <div className="cards-container">
                <div className="skill-card">
                    <div className="sm:w-[60%] md:w-[70%]">
                        <Image src="/svgs/web-development.svg" className="mx-auto" width="500" height="500" responsive="true" />
                    </div>
                    <h3>Web development</h3>
                    <div className="mt-3 sm:w-[80%] md:w-[100%]">
                        <p className="text-slate-300">
                            I am a Full-stack Web Developer With Good Experience and i have Build Serveral <span onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })} className="text-blue-500 hover:text-blue-600 cursor-pointer font-bold hover:underline">projects
                            </span> Ready for Production Check Them out!
                        </p>
                    </div>
                </div>

                <div className="skill-card">
                    <div className="sm:w-[58%] md:w-[70%]">
                        <Image src="/svgs/ui-ux.svg" width="300" height="300" responsive="true" />
                    </div>
                    <h3>Ui/Ux Design</h3>
                    <p className="text-slate-300 mt-3">What a Good full-stack developer needs is Design Skills and i am Ui/Ux Designer </p>
                </div>
            </div>
            <div className="mx-auto text-center mt-3">
                <h1 className="text-4xl text-text_primary font-bold mb-3">Technologies 🧰</h1>
                <span className="text-slate-300">What i use to Build Websites :-)</span>
            </div>
            <div className="cards-container">
                <div className="skill-card">
                    <div className="sm:w-[58%] md:w-[70%]">
                        <Image src="/svgs/front-end.svg" width="300" height="300" responsive="true" />
                    </div>
                    <h3>Front-end</h3>
                    <div className="mt-3 sm:w-[80%]">
                        <ul className="text-slate-300 text-lg text-center">
                            <li>Html</li>
                            <li>Css</li>
                            <li>javaScript</li>
                            <li>Next js</li>
                            <li>Tailwind css</li>
                        </ul>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="sm:w-[60%] md:w-[70%]">
                        <Image src="/svgs/back-end.svg" className="mx-auto" width="500" height="500" responsive="true" />
                    </div>
                    <h3>Back-end</h3>
                    <div className="mt-3 sm:w-[80%] text-center">
                        <ul className="text-slate-300 text-lg">
                            <li>Node js</li>
                            <li>Mongodb</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
