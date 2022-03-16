import Image from 'next/image';
import { useLayoutEffect } from 'react';
export default function Projects() {
    const projects = [
        {
            title: 'متجر الكتروني',
            description: 'يوجد فيه الكثير من الميزات المهمة جدا مثل (تحليل بيانات, نظام الاسترداد بالنقاط, تقيم للمنتجات, تاكيد الحساب بالايميل, لوحة صدارة للمستخدمين, متوافق مع جميع الاجهزة) و المزيد  ',
            image: 'store_photo.jpg',
            source_code: 'https://github.com/mohammed884/nice-store',
            link: ',',
            isAlive: false,
        },
        {
            title: 'نظام اقتراح منتجات',
            description: 'الفائدة هذه النظام هو اقتراح منتجات بشكل عشوائي من اجل الالهام من ميزاته (تحديد عدد المنتجات عند جلبها, تحديد الخانات وعدد المنتجات من كل خانه عند جلبها, قدرة ترتيب المنتجات حسب عددهم, فلترة المنتجات بواسطة الخانات',
            image: 'suggestion-project.jpg',
            source_code: 'https://github.com/mohammed884/suggestion-projects',
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
    useLayoutEffect(() => {
        const cards = document.getElementsByClassName("project");
        const cardsObserver = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                const { isIntersecting, target } = entry;
                if (!isIntersecting) return;
                target.classList.remove("translate-y-[18px]")
                cardsObserver.unobserve(target);
            })

        }, { threshold: .6 })
        for (let i = 0; i < cards.length; i++) cardsObserver.observe(cards[i])

    })
    return (
        <div className="w-[85%] min-h-[60vh] mx-auto text-center">
            <div>
                <h1 className="w-[280px] h-[70px] bg-blue-600 text-4xl text-text_primary font-bold p-3 mb-3 mx-auto rounded">🌏 مشاريعي</h1>
            </div>
            <div className="md:w-[100%] mx-auto grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 mt-5">
                {
                    projects.map(({ title, image, isAlive, description, link, source_code }, index) =>
                        <div key={index} className="project translate-y-[18px] sm:w-[85%] md:w-[85%] lg:w-[65%] justify-self-center relative" onMouseLeave={() => isDescriptionAppear(false, index)} onMouseEnter={() => isDescriptionAppear(true, index)}>
                            <Image src={`/images/${image}`} className="rounded  aspect-square" alt={title} width="500" height="500" layout='responsive' />
                            <div className={`${index} w-[105%] h-[105%] left-[50%] text-center bg-bg_primary top-[50%] translate-x-[-50%] translate-y-[-50%] absolute opacity-0`}></div>
                            <div className={`${index} sm:w-[93%] md:w-[85%] lg:w-[100%] left-[50%] text-center top-[50%] translate-x-[-50%] translate-y-[-50%] text-white absolute hidden`}>
                                <h1 className="font-bold sm:text-xl md:text-2xl mb-3">{title}</h1>
                                <div className="mx-auto sm:text-sm w-[80%] overflow-hidden h-[40%] rtl">
                                    <p className="sm:text-sm lg:text-[.8rem] xl:text-[.97rem] text-slate-100">{description}</p>
                                </div>
                                <div className="w-[100%] mt-2">
                                    {
                                        isAlive
                                        &&
                                        <button className="sm:w-[80px] sm:h-[30px] md:w-[100px] md:h-[35px] rounded bg-blue-500 hover:bg-blue-600">
                                            <a href={link} target="_blank" rel="noreferrer">زور الموقع</a>
                                        </button>
                                    }
                                    {
                                        source_code
                                        &&
                                        <button className="sm:w-[80px] sm:h-[30px] md:w-[100px] md:h-[35px] text-sm rounded border sm:mt-0 sm:ml-2 md:ml-2 md:mt-0 border-blue-500 hover:border-blue-600">
                                            <a href={source_code} target="_blank" rel="noreferrer">المصدر</a>
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
