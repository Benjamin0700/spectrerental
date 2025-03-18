import React from "react";

const equipment = [
    { name: "Распределительные щиты", logo: "	https://patriot.ua/wp-content/uploads/2020/06/Dystroboks2-500x500.jpg" },
    { name: "Разветвители кабеля", logo: "https://patriot.ua/wp-content/uploads/2020/06/SHtany-1024-500x500.jpg" },
    { name: "Кабели силовые", logo: "	https://patriot.ua/wp-content/uploads/2020/06/Kabelya20m-500x500.jpg" },
    { name: "Диммеры и приборы контроля света", logo: "	https://patriot.ua/wp-content/uploads/2020/06/24-channel-2-500x500.jpg" },
    { name: "Генераторы Портативные", logo: "https://patriot.ua/wp-content/uploads/2020/06/Generatory-500x500.jpg" },
];

const PowerEquipment = () => {
    return (
        <div className="p-12">
            <h1 className="text-2xl font-semibold mb-6">Силовое Оборудование</h1>
            <div className="grid grid-cols-3 gap-4">
                {equipment.map((equipment, index) => (
                    <div
                        key={index}
                        className={` rounded-lg overflow-hidden shadow-md transition duration-300 ${index === 0 ? "border-black" : ""
                            }`}
                    >
                        <div className="p-4 flex justify-center items-center h-48 bg-white">
                            <img
                                src={equipment.logo}
                                alt={equipment.name}
                                className="h-38 object-contain"
                            />
                        </div>
                        <div
                            className={`p-4 flex justify-between items-center transition duration-300 group hover:bg-black hover:text-white`}
                        >
                            <span className="font-medium">{equipment.name}</span>
                            <button className="w-12 h-12 flex items-center justify-center rounded-md">
                                <div className="p-3 rounded-lg cursor-pointer transition">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-6 h-6 transition-colors duration-300 group-hover:stroke-white"
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

export default PowerEquipment;
