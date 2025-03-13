import React from "react";

const effects = [
    { name: "База Hazer Pro", text: "Профессиональный генератор тумана", logo: "https://patriot.ua/wp-content/uploads/2019/06/1024hazer-base-pro.jpg" },
    { name: "Генератор тумана HZ-100", text: "Профессиональный генератор тумана", logo: "https://patriot.ua/wp-content/uploads/2019/06/072A5616-1024.jpg" },
    { name: "Генератор тумана HZ-400", text: "Профессиональный генератор тумана", logo: "https://patriot.ua/wp-content/uploads/2019/06/072A5621-1024.jpg" },
    { name: "Генератор тумана HZ-500", text: "Профессиональный генератор тумана", logo: "https://patriot.ua/wp-content/uploads/2019/06/hazer-500-new1.jpg" },
    { name: "Генератор тумана DF-50", text: "Профессиональный генератор тумана", logo: "	https://patriot.ua/wp-content/uploads/2019/06/072A5625-1024.jpg" },
    { name: "Жидкость для дымки HZL-1", text: "Жидкость для хейзера", logo: "	https://patriot.ua/wp-content/uploads/2019/06/072A5628-1024.jpg" },
    { name: "АНТАРИ F-80Z", text: "Профессиональный генератор дыма", logo: "	https://patriot.ua/wp-content/uploads/2019/06/072A5679-1024.jpg" },
    { name: "ДТС Ф1", text: "Профессиональный генератор дыма", logo: "https://patriot.ua/wp-content/uploads/2019/06/072A5689-1024.jpg" },
    { name: "FG-5001 Дракон", text: "Профессиональный генератор дыма", logo: "	https://patriot.ua/wp-content/uploads/2019/06/1024-072A5622.jpg" },
    { name: "АНТАРИ Z1000", text: "Профессиональный генератор дыма", logo: "https://patriot.ua/wp-content/uploads/2019/06/072A5686-1024.jpg" },
    { name: "КАПИТАН Д", text: "Профессиональный генератор дыма", logo: "	https://patriot.ua/wp-content/uploads/2019/06/072A5683-1024.jpg" },
    { name: "ST-дымовая жидкость", text: "Жидкость для генераторов дыма", logo: "	https://patriot.ua/wp-content/uploads/2019/06/ST-smoke-fluid.jpg" },
    { name: "Ветряная машина", text: "Профессиональный витродуй", logo: "https://patriot.ua/wp-content/uploads/2019/06/VETRODUY-1024.jpg" },
];

const SpecialEffects = () => {
    return (
        <div className="p-12">
            <h1 className="text-2xl font-semibold mb-6">Спец Эффекты</h1>
            <div className="grid grid-cols-3 gap-4">
                {effects.map((effects, index) => (
                    <div
                        key={index}
                        className="group rounded-lg overflow-hidden shadow-md transition duration-300 hover:border-red-600"
                    >
                        {/* Image */}
                        <div className="p-4 flex justify-center items-center h-48 bg-white">
                            <img
                                src={effects.logo}
                                alt={effects.name}
                                className="h-38 object-contain"
                            />
                        </div>

                        {/* Title + Button */}
                        <div className="p-4 flex flex-col items-center text-center transition duration-300 bg-gray-200 group-hover:bg-red-600 group-hover:text-white">
                            <span className="font-medium">{effects.name}</span>
                            <span className="font-medium">{effects.text}</span>

                            {/* Hidden Button */}
                            <button className="w-full mt-4 py-2 px-4 bg-red-600 text-white rounded-lg flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
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
