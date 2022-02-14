import Image from "next/image"
export default function Why_me({ whyMeRef, setIsWinner, setWinnerMessage, homeRef }) {
    return (
        <div className="w-[85%] min-h-[100vh] mx-auto text-center mt-5" ref={whyMeRef}>
            <h1 className="text-text_primary sm:text-3xl md:text-4xl mx-auto font-bold">Why Me 🤔</h1>
            <p className="text-slate-200 text-[.9rem] mt-2">Good Question :-)</p>
            <div className="flex flex-col items-center mt-6">
                <div className="why_me_card">
                    <Image src="/svgs/step.svg" alt="Step By Step" width="300" height="300" responisve="true" />
                    <div className="w-[88%] text-left md:ml-3">
                        <h3 className="text-text_primary font-bold text-[1.25rem] sm:mt-5 md:mt-3 lg:mt-0 mb-2">
                            Step By Step
                        </h3>
                        <p className="text-slate-300 md:ml-3">
                            First Time you Make a Website? or had a bad experience before? Don NOT Worry! I will Walk You Through Everystep in the process From
                            <span className="font-bold text-slate-100"> Scratch 0️⃣ to the Deployment 💯</span>
                        </p>
                    </div>
                </div>
                <div className="why_me_card">
                    <img src="/svgs/deadLines.svg" className="md:hidden sm:w-[300px]" alt="Step By Step" width="300" height="300" responisve="true" />
                    <div className="w-[88%] text-left md:ml-3">
                        <h3 className="text-text_primary font-bold text-[1.25rem] sm:mt-5 md:mt-3 lg:mt-0 mb-2">
                            Dead Line
                        </h3>
                        <p className="text-slate-300">
                            One of the Most Important Thing To me and Properly You in the work are the Dead Lines So <span className="font-bold text-slate-100"> i will Make Sure to NOT Miss it
                                <span onClick={() => {
                                    setIsWinner(true);
                                    setWinnerMessage(`Happy 5$ Dollars 💸 Code is (The Easiest 5$)`);
                                    homeRef.current.scrollIntoView()
                                }}>🎯</span>
                            </span>
                        </p>
                    </div>
                    <img src="/svgs/deadLines.svg" alt="Dead Line Svg" loading="lazy" className="sm:hidden lg:block lg:w-[300px]" />
                </div>
                <div className="why_me_card">
                    <img src="/svgs/goodProduct.svg" alt="Step By Step" width="300" height="300" responisve="true" />

                    <div className="w-[88%] text-left md:ml-3">
                        <h3 className="text-text_primary font-bold text-[1.25rem] sm:mt-5 md:mt-3 lg:mt-0 mb-2">
                            The Finished Product
                        </h3>
                        <p className="text-slate-300">
                            Why Your Product Gona be Good? cause i will Use The latest Technologies With My Experience To Make The finish Product 
                            <span className="font-bold text-slate-100"> Fast ⚡ & Scure 🔒</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
