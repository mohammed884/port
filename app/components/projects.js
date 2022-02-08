import Image from 'next/image';
export default function Projects({ projectsRef }) {
    const projects = [
        {
            title: 'E-commerce Store',
            description: 'High end store with Pleanty Features Like (Data Analysis, Gamification System, Points System, Star Ranking, Email Verification, Users Leader Board, Responsive) And a Lot More ',
            image: 'store_photo.jpg',
            source_code: 'https://github.com/mohammed884/nice-store',
            link: ',',
            isAlive: false,
        },
    ];
    const isDescriptionAppear = (value, index) => {
        const elements = document.getElementsByClassName(index); 
        if (value) {
            elements[0].classList.remove('opacity-0');
            elements[0].classList.add('opacity-90');
            elements[1].classList.remove('hidden')
        }
        else {
            elements[0].classList.add('opacity-0');
            elements[0].classList.remove('opacity-80');
            elements[1].classList.add('hidden')
        }
    };
    return (
        <div className="w-[85%] min-h-[100vh] mx-auto text-center" ref={projectsRef}>
            <div>
                <h1 className="text-text_primary sm:text-3xl md:text-4xl mx-auto font-bold">Checkout My Projects 🌎</h1>
                <p className="text-slate-400 mx-auto">Projects i've Made With Love 💘</p>
            </div>
            <div className="md:w-[100%] mx-auto grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 mt-5">
                {
                    projects.map(({ title, image, isAlive, description, link, source_code }, index) =>
                        <div key={index} className="sm:w-[70%] md:w-[85%] lg:w-[65%] justify-self-center relative" onMouseLeave={() => isDescriptionAppear(false, index)} onMouseEnter={() => isDescriptionAppear(true, index)}>
                            <Image src={`/images/${image}`} className="rounded object-cover object-center aspect-square" alt={title} width="500" height="500" layout='responsive' />
                            <div className={`${index} w-[105%] h-[105%] left-[50%] text-center bg-bg_primary top-[50%] translate-x-[-50%] translate-y-[-50%] absolute opacity-0`}></div>
                            <div className={`${index} sm:w-[93%] md:w-[85%] lg:w-[100%] left-[50%] text-center top-[50%] translate-x-[-50%] translate-y-[-50%] text-white absolute hidden`}>
                                <h1 className="font-bold sm:text-2xl md:text-2xl mb-3">{title}</h1>
                                <div className="mx-auto w-[80%] overflow-hidden h-[40%]">
                                    <p className="text-slate-100">{description}</p>
                                </div>
                                <div className="w-[100%] mt-2">
                                    {isAlive &&
                                        <button className="w-[100px] h-[35px] rounded bg-blue-500 hover:bg-blue-600">
                                            <a href={link} target="_blank">Vist</a>
                                        </button>
                                    }
                                    {source_code &&
                                        <button className="w-[100px] h-[35px] rounded border sm:mt-0 sm:ml-2 md:ml-2 md:mt-0 border-blue-500 hover:border-blue-600">
                                            <a href={source_code} target="_blank">Source</a>
                                        </button>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
