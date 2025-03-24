import React from "react";

const effects = [
    { name: "База Hazer Pro", text: "Профессиональный генератор тумана", logo: "https://patriot.ua/wp-content/uploads/2019/06/1024hazer-base-pro.jpg" },
    { name: "Генератор тумана HZ-100", text: "Профессиональный генератор тумана", logo: "https://patriot.ua/wp-content/uploads/2019/06/072A5616-1024.jpg" },
    { name: "Генератор тумана HZ-400", text: "Профессиональный генератор тумана", logo: "https://patriot.ua/wp-content/uploads/2019/06/072A5621-1024.jpg" },
    { name: "Генератор тумана HZ-500", text: "Профессиональный генератор тумана", logo: "https://patriot.ua/wp-content/uploads/2019/06/hazer-500-new1.jpg" },
    { name: "Генератор тумана DF-50", text: "Профессиональный генератор тумана", logo: "https://patriot.ua/wp-content/uploads/2019/06/072A5625-1024.jpg" },
    { name: "Жидкость для дымки HZL-1", text: "Жидкость для хейзера", logo: "https://patriot.ua/wp-content/uploads/2019/06/072A5628-1024.jpg" },
    { name: "АНТАРИ F-80Z", text: "Профессиональный генератор дыма", logo: "https://patriot.ua/wp-content/uploads/2019/06/072A5679-1024.jpg" },
    { name: "ДТС Ф1", text: "Профессиональный генератор дыма", logo: "https://patriot.ua/wp-content/uploads/2019/06/072A5689-1024.jpg" },
    { name: "FG-5001 Дракон", text: "Профессиональный генератор дыма", logo: "https://patriot.ua/wp-content/uploads/2019/06/1024-072A5622.jpg" },
];

const SpecialEffects = () => {
    return (
        <div className="p-4 sm:p-6 lg:p-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {effects.map((item, index) => (
                    <div
                        key={index}
                        className="group rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-xl"
                    >
                        {/* Image */}
                        <div className="p-4 flex justify-center items-center h-32 md:h-40 bg-white">
                            <img src={item.logo} alt={item.name} className="h-full object-contain" />
                        </div>

                        {/* Title + Button */}
                        <div className="p-4 flex flex-col items-center text-center transition duration-300 bg-gray-100 group-hover:bg-black group-hover:text-white">
                            <span className="font-semibold">{item.name}</span>
                            <span className="text-sm opacity-80">{item.text}</span>

                            {/* Hidden Button */}
                            <button className="w-full mt-4 py-2 px-4 text-white rounded-lg flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform transition duration-500 ease-in-out">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-6 h-6"
                                >
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                                ЗАПРОС ЦЕНЫ
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecialEffects;
