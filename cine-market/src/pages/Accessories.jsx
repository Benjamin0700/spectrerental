import React from "react";

const accessories = [
    { name: "Головы, штативы, крепление", logo: "	https://patriot.ua/wp-content/uploads/2020/05/YKonkaGOLOVYytd-1-500x500.jpg" },
    { name: "Компендиумы с креплением на суппорты", logo: "	https://patriot.ua/wp-content/uploads/2020/05/kompend-500x500.jpg" },
    { name: "Компендиумы с креплением на объективы", logo: "	https://patriot.ua/wp-content/uploads/2020/07/klypon3-500x500.jpg" },
    { name: "Управление фокусом и оптикой", logo: "	https://patriot.ua/wp-content/uploads/2020/05/Foloufokusy-1-500x500.jpg" },
    { name: "Мониторы Накамерные", logo: "	https://patriot.ua/wp-content/uploads/2020/05/Monytory_NAKAMERNYE-1-500x500.jpg" },
    { name: "Мониторы", logo: "https://patriot.ua/wp-content/uploads/2020/06/A62A0510-500x500.jpg" },
    { name: "Измерительные приборы", logo: "https://patriot.ua/wp-content/uploads/2020/05/YZMerytelnye-1-500x500.jpg" },
    { name: "Контроль изображения", logo: "https://patriot.ua/wp-content/uploads/2020/05/IMAgeControl-1-500x500.jpg" },
    { name: "Беспроводные гарнитуры", logo: "	https://patriot.ua/wp-content/uploads/2021/07/intercom-systems-500x500.jpg" },
];

const Accessories = () => {
    return (
        <div className="p-10">
            <h1 className="text-2xl font-semibold mb-6">Аксессуары</h1>
            <div className="grid grid-cols-3 gap-4">
                {accessories.map((accessories, index) => (
                    <div
                        key={index}
                        className={`border rounded-lg overflow-hidden shadow-md transition duration-300 ${index === 0 ? "border-black" : ""
                            }`}
                    >
                        <div className="p-4 flex justify-center items-center h-48 bg-white">
                            <img
                                src={accessories.logo}
                                alt={accessories.name}
                                className="h-38 object-contain"
                            />
                        </div>
                        <div
                            className={`p-4 flex justify-between items-center transition duration-300 ${index === 0 ? "bg-black text-white" : "bg-gray-200"
                                } hover:bg-black hover:text-white`}
                        >
                            <span className="font-medium">{accessories.name}</span>
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

export default Accessories;