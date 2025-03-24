import React from "react";

const accessories = [
    { name: "Головы, штативы, крепление", logo: "https://patriot.ua/wp-content/uploads/2020/05/YKonkaGOLOVYytd-1-500x500.jpg" },
    { name: "Компендиумы с креплением на суппорты", logo: "https://patriot.ua/wp-content/uploads/2020/05/kompend-500x500.jpg" },
    { name: "Компендиумы с креплением на объективы", logo: "https://patriot.ua/wp-content/uploads/2020/07/klypon3-500x500.jpg" },
    { name: "Управление фокусом и оптикой", logo: "https://patriot.ua/wp-content/uploads/2020/05/Foloufokusy-1-500x500.jpg" },
    { name: "Мониторы Накамерные", logo: "https://patriot.ua/wp-content/uploads/2020/05/Monytory_NAKAMERNYE-1-500x500.jpg" },
    { name: "Мониторы", logo: "https://patriot.ua/wp-content/uploads/2020/06/A62A0510-500x500.jpg" },
    { name: "Измерительные приборы", logo: "https://patriot.ua/wp-content/uploads/2020/05/YZMerytelnye-1-500x500.jpg" },
    { name: "Контроль изображения", logo: "https://patriot.ua/wp-content/uploads/2020/05/IMAgeControl-1-500x500.jpg" },
    { name: "Беспроводные гарнитуры", logo: "https://patriot.ua/wp-content/uploads/2021/07/intercom-systems-500x500.jpg" },
];

const Accessories = () => {
    return (
        <div className="p-4 md:p-8 lg:p-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {accessories.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-lg overflow-hidden shadow-md transition duration-300 border border-gray-200"
                    >
                        <div className="p-4 flex justify-center items-center h-40 md:h-48 bg-white">
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="h-24 md:h-32 object-contain"
                            />
                        </div>
                        <div
                            className="p-4 flex justify-between items-center transition duration-300 group hover:bg-black hover:text-white"
                        >
                            <span className="font-medium text-sm md:text-base text-center">{item.name}</span>
                            <button className="w-10 h-10 flex items-center justify-center rounded-md">
                                <div className="p-2 rounded-lg cursor-pointer transition">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-5 h-5 transition-colors duration-300 group-hover:stroke-white"
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

export default Accessories;
