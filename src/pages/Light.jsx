import React from "react";

const light = [
    { name: "HMI (без мерцания) 5600° ARRI Compact Френель", logo: "https://patriot.ua/wp-content/uploads/2020/06/HMI5600ARRI-COMPACT-500x500.jpg" },
    { name: "HMI (без мерцания) 5600° ARRI M-Series", logo: "https://patriot.ua/wp-content/uploads/2019/06/perezalyv-m-90-500x500.jpg" },
    { name: "HMI (без мерцания) 5600° Par", logo: "https://patriot.ua/wp-content/uploads/2020/06/dzhoker-1600-arry-san-10241-500x500.jpg" },
    { name: "HMI Открытый 5600° ARRI X LITE", logo: "https://patriot.ua/wp-content/uploads/2020/06/ArryH-500x500.jpg" },
    { name: "ВОЛЬФРАМ 3200° Френеля", logo: "https://patriot.ua/wp-content/uploads/2020/06/ArryTangsteg-500x500.jpg" },
    { name: "Открытое лицо 3200°", logo: "https://patriot.ua/wp-content/uploads/2020/06/Openfejs-500x500.jpg" },
    { name: "Дедолайт 3200°/5600°", logo: "https://patriot.ua/wp-content/uploads/2020/06/Dedolajt-500x500.jpg" },
    { name: "КиноФло 3200°/5600°", logo: "https://patriot.ua/wp-content/uploads/2020/06/Kynoflo2-500x500.jpg" },
    { name: "Светодиодное освещение RGB", logo: "https://patriot.ua/wp-content/uploads/2020/06/LedRgb-500x500.jpg" },
    { name: "Светодиодное освещение 3200°/5600°", logo: "https://patriot.ua/wp-content/uploads/2020/06/Led3200-5600-500x500.jpg" },
    { name: "ПАР 3200° / И Т.Д.", logo: "https://patriot.ua/wp-content/uploads/2020/06/Dynodzhambo-500x500.jpg" },
    { name: "CHIMERA / ARRI", logo: "https://patriot.ua/wp-content/uploads/2020/06/Hymery-500x500.jpg" },
    { name: "Приборы рассеивающего света", logo: "https://patriot.ua/wp-content/uploads/2020/06/SoftboksyRAsseyvately-500x500.jpg" },
    { name: "Аккумуляторные комплекты", logo: "https://patriot.ua/wp-content/uploads/2020/06/Batarey-500x500.jpg" },
    { name: "Расходные материалы ПРОДАЖА", logo: "https://patriot.ua/wp-content/uploads/2020/06/rashodnyky2-1024-500x500.jpg" },
];

const Light = () => {
    return (
        <div className="p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {light.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-lg overflow-hidden shadow-md transition duration-300"
                    >
                        <div className="p-4 flex justify-center items-center h-32 sm:h-40 lg:h-48 bg-white">
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="h-24 sm:h-32 object-contain"
                            />
                        </div>
                        <div className="p-4 flex justify-between items-center transition duration-300 group hover:bg-black hover:text-white">
                            <span className="font-medium text-sm sm:text-base">{item.name}</span>
                            <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-md">
                                <div className="p-2 sm:p-3 rounded-lg cursor-pointer transition">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 group-hover:stroke-white"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Light;
