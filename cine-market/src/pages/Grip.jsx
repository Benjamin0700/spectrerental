import React from "react";

const grip = [
    { name: "Рамы сборные", logo: "https://patriot.ua/wp-content/uploads/2020/06/ramy2-1024-500x500.jpg" },
    { name: "ФОН зеленый, синий ", logo: "https://patriot.ua/wp-content/uploads/2020/06/1024-2072A5383-2-500x500.jpg" },
    { name: "Крепление на авто", logo: "	https://patriot.ua/wp-content/uploads/2020/06/A62A4285-3-1300x1300-500x500.jpg" },
    { name: "Трубы Фермы", logo: "	https://patriot.ua/wp-content/uploads/2020/06/TrubyFermy-500x500.jpg" },
    { name: "Штативы", logo: "	https://patriot.ua/wp-content/uploads/2020/06/1-10-500x500.jpg" },
    { name: "Крепление", logo: "https://patriot.ua/wp-content/uploads/2020/06/kreplenyya2-500x500.jpg" },
    { name: "Подвесы", logo: "	https://patriot.ua/wp-content/uploads/2020/06/Kryuky2-500x500.jpg" },
    { name: "Контроль света", logo: "	https://patriot.ua/wp-content/uploads/2020/06/flagysetky2-1024-500x500.jpg" },
    { name: "Бумы и удлинители", logo: "	https://patriot.ua/wp-content/uploads/2020/06/Bumy-500x500.jpg" },
    { name: "Аксессуары", logo: "https://patriot.ua/wp-content/uploads/2020/06/lestnytsy-1024-500x500.jpg" },
    { name: "Оборудование для спецэффектов", logo: "	https://patriot.ua/wp-content/uploads/2020/06/HejzeryDym-500x500.jpg" },
    { name: "Расходные материалы ПРОДАЖА", logo: "	https://patriot.ua/wp-content/uploads/2019/06/Polly-500x500.jpg" },
];

const Grip = () => {
    return (
        <div className="p-16">
            <div className="grid grid-cols-3 gap-4">
                {grip.map((grip, index) => (
                    <div
                        key={index}
                        className={` rounded-lg overflow-hidden shadow-md transition duration-300 ${index === 0 ? "border-black" : ""
                            }`}
                    >
                        <div className="p-4 flex justify-center items-center h-48 bg-white">
                            <img
                                src={grip.logo}
                                alt={grip.name}
                                className="h-32 object-contain"
                            />
                        </div>
                        <div
                            className={`p-4 flex justify-between items-center transition duration-300 group hover:bg-black hover:text-white`}
                        >
                            <span className="font-medium">{grip.name}</span>
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

export default Grip;
