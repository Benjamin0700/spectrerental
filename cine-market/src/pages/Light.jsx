import React from "react";

const light = [
    { name: "HMI (без мерцания) 5600° ARRI Compact Френель", logo: "https://patriot.ua/wp-content/uploads/2020/06/HMI5600ARRI-COMPACT-500x500.jpg" },
    { name: "HMI (без мерцания) 5600° ARRI M-Series", logo: "https://patriot.ua/wp-content/uploads/2019/06/perezalyv-m-90-500x500.jpg" },
    { name: "HMI (без мерцания) 5600° Par", logo: "https://patriot.ua/wp-content/uploads/2020/06/dzhoker-1600-arry-san-10241-500x500.jpg" },
    { name: "HMI Открытый 5600° ARRI X LITE", logo: "https://patriot.ua/wp-content/uploads/2020/06/ArryH-500x500.jpg" },
    { name: "ВОЛЬФРАМ 3200° Френеля", logo: "	https://patriot.ua/wp-content/uploads/2020/06/ArryTangsteg-500x500.jpg" },
    { name: "Открытое лицо 3200°", logo: "	https://patriot.ua/wp-content/uploads/2020/06/Openfejs-500x500.jpg" },
    { name: "Дедолайт 3200°/5600°", logo: "https://patriot.ua/wp-content/uploads/2020/06/Dedolajt-500x500.jpg" },
    { name: "КиноФло 3200°/5600°", logo: "https://patriot.ua/wp-content/uploads/2020/06/Kynoflo2-500x500.jpg" },
    { name: "Светодиодное освещение RGB", logo: "	https://patriot.ua/wp-content/uploads/2020/06/LedRgb-500x500.jpg" },
    { name: "Светодиодное освещение 3200°/5600°", logo: "	https://patriot.ua/wp-content/uploads/2020/06/Led3200-5600-500x500.jpg" },
    { name: "ПАР 3200° / И Т.Д.", logo: "https://patriot.ua/wp-content/uploads/2020/06/Dynodzhambo-500x500.jpg" },
    { name: "CHIMERA / ARRI ", logo: "https://patriot.ua/wp-content/uploads/2020/06/Hymery-500x500.jpg" },
    { name: "Приборы рассеивающего света	", logo: "https://patriot.ua/wp-content/uploads/2020/06/SoftboksyRAsseyvately-500x500.jpg" },
    { name: "Аккумуляторные комплекты", logo: "	https://patriot.ua/wp-content/uploads/2020/06/Batarey-500x500.jpg" },
    { name: "Расходные материалы ПРОДАЖА", logo: "	https://patriot.ua/wp-content/uploads/2020/06/rashodnyky2-1024-500x500.jpg" },
];

const Light = () => {
    return (
        <div className="p-12">
            <h1 className="text-2xl font-semibold mb-6">Свет</h1>
            <div className="grid grid-cols-3 gap-4">
                {light.map((light, index) => (
                    <div
                        key={index}
                        className={`border rounded-lg overflow-hidden shadow-md transition duration-300 ${index === 0 ? "border-black" : ""
                            }`}
                    >
                        <div className="p-4 flex justify-center items-center h-48 bg-white">
                            <img
                                src={light.logo}
                                alt={light.name}
                                className="h-38 object-contain"
                            />
                        </div>
                        <div
                            className={`p-4 flex justify-between items-center transition duration-300 ${index === 0 ? "bg-black text-white" : "bg-gray-200"
                                } hover:bg-black hover:text-white`}
                        >
                            <span className="font-medium">{light.name}</span>
                            <button className="w-12 h-12 flex items-center justify-center rounded-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-6 h-6"
                                >
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Light;