import Image from "next/image"
export default function Skills({ projectsRef }) {
    return (
        <div className="w-[100%] min-h-[100vh]">
            <div className="w-[100%] min-h-[100vh] mx-auto">
                <div className="mx-auto text-center h-fit">
                    <h1 data-aos="zoom-out-up" className="w-[240px] h-[70px] bg-blue-600 text-4xl text-text_primary font-bold p-4 mx-auto rounded">🔨 المهارات</h1>
                </div>
                <div className="cards-container rtl">
                    <div data-aos="fade-left" className="skill-card">
                        <div className="sm:w-[60%] md:w-[70%]">
                            <Image src="/svgs/web-development.svg" className="mx-auto" width="500" height="500" responsive="true" alt="web development" />
                        </div>
                        <h3>برمجة المواقع</h3>
                        <div className="mt-3 sm:w-[80%] md:w-[100%] text-center">
                            <p className="text-slate-300">
                                انا مطور Full-stack و امتلك خبرة جيدة ساقوم بتوظيفها من اجل جعل موقعك في افضل صورة ممكنة لك ولمستخدم موقعك الق نظرة على  <span onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })} className="text-blue-500 hover:text-blue-600 cursor-pointer font-bold hover:underline">مشاريعي
                                </span>
                            </p>
                        </div>
                    </div>

                    <div data-aos="fade-right" className="skill-card">
                        <div className="sm:w-[58%] md:w-[70%]">
                            <Image src="/svgs/ui-ux.svg" width="300" height="300" responsive="true" alt="ui ux design" />
                        </div>
                        <h3>تصميم Ui/Ux</h3>
                        <p className="text-slate-300 mt-3 text-center">
                            ما هي المهارة التي يحتاجها مبرمج المواقع لنقل عمله لمستوى اخر؟
                            هي مهارة التصميم وانا مصمم واجهة و تجربة مستخدم
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[100%] min-h-[100vh] mx-auto">
                <div className="mx-auto text-center mt-3">
                    <h1 data-aos="zoom-out-up" className="w-[240px] h-[70px] bg-blue-600 text-4xl text-text_primary font-bold p-4 mx-auto rounded">🧰 التقنيات</h1>
                </div>
                <div className="cards-container">
                    <div data-aos="fade-right" className="skill-card">
                        <div className="sm:w-[58%] md:w-[70%]">
                            <Image src="/svgs/front-end.svg" width="300" height="300" responsive="true" alt="front end svg" />
                        </div>
                        <h3>واجه امامية</h3>
                        <div className="mt-3 sm:w-[80%] md:w-[100%] text-center">
                            <ul className="text-slate-300 text-lg text-center">
                                <li>Html</li>
                                <li>Css</li>
                                <li>javaScript</li>
                                <li>Next js</li>
                                <li>Tailwind css</li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="skill-card">
                        <div className="sm:w-[60%] md:w-[70%]">
                            <Image src="/svgs/back-end.svg" className="mx-auto" width="500" height="500" responsive="true" alt="back end svg" />
                        </div>
                        <h3>واجه خلفيه</h3>
                        <div className="mt-3 sm:w-[80%] md:w-[100%] text-center">
                            <ul className="text-slate-300 text-lg">
                                <li>Express</li>
                                <li>Node js</li>
                                <li>Mongodb</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
