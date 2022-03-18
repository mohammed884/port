import Image from "next/image"
export default function Why_me() {
    return (
        <div className="w-[85%] min-h-[100vh] mx-auto text-center mt-5">
            <h1 data-aos="zoom-out-up" className="w-[240px] h-[70px] bg-blue-600 text-4xl text-text_primary font-bold p-4 mx-auto rounded">🤔 لماذا انا</h1>
            <div className="flex flex-col items-center mt-6">
                <div data-aos="fade-left" className="why-me-card rtl">
                    <Image src="/svgs/step.svg" alt="Step By Step" width="350" height="350" responisve="true" />
                    <div className="w-[88%] text-right md:ml-3 rtl">
                        <h3 className="text-text_primary font-bold text-[1.25rem] sm:mt-5 md:mt-3 lg:mt-0 mb-2">
                            خطوة بخطوة
                        </h3>
                        <p className="text-slate-300 md:ml-3">
                            اول مرة تقوم بطلب موقع او حظيت بتجربة سيئة من قبل؟ لا تقلق سوف امشي معك خطوة بخطوة بالعملية
                            <span className="font-bold text-slate-100"> من التصميم 🧱 الى البرمجة الى رفع موقعك 🏡</span>
                        </p>
                    </div>
                </div>
                <div data-aos="fade-right" className="why-me-card rtl">
                    <img src="/svgs/dead-lines.svg" className="sm:w-[300px] sm:block lg:hidden" alt="Step By Step" loading="lazy" />
                    <div className="w-[88%] text-right md:ml-3">
                        <h3 className="text-text_primary font-bold text-[1.25rem] sm:mt-5 md:mt-3 lg:mt-0 mb-2">
                            موعد التسليم
                        </h3>
                        <p className="text-slate-300">
                             واحد من اهم الامور في العمل بالنسبة الي هيه مواعين التسليم والالتزام بيها 
                            <span className="font-bold text-slate-100"> تاكد انو ما راح افوته 🎯 </span>
                        </p>
                    </div>
                    <img src="/svgs/dead-lines.svg" className="sm:hidden lg:block lg:w-[300px]" alt="Dead Line Svg" loading="lazy" />
                </div>
                <div data-aos="fade-left" className="why-me-card">
                    <Image src="/svgs/good-product.svg" alt="Step By Step" width="350" height="350" responisve="true" />

                    <div className="w-[88%] md:ml-3">
                        <h3 className="text-text_primary text-right font-bold text-[1.25rem] sm:mt-5 md:mt-3 lg:mt-0 mb-2">
                            المنتج النهائي
                        </h3>
                        <p className="text-slate-300 text-right">
                            لماذا سوف يكون منتجك النهائي جيد؟
                            لاني سوف استخدم احدث التقنيات مع مهاراتي من اجل التاكد من ان المنتج سوف يكون
                            <span className="font-bold text-slate-100">🔒 سريع ⚡ و امن </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
