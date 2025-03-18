import React from "react";

const sound = [
    { name: "Звукозаписывающие комплекты", logo: "	https://patriot.ua/wp-content/uploads/2022/02/sound-recording-sets.jpg" },
    { name: "Регистраторы", logo: "https://patriot.ua/wp-content/uploads/2020/05/rekordery2-500x500.jpg" },
    { name: "Компендиумы с креплением на объективы", logo: "	https://patriot.ua/wp-content/uploads/2020/06/Wireless-Bodypack-SETs-500x500.jpg" },
    { name: "Комплекты Sound Boom", logo: "https://patriot.ua/wp-content/uploads/2020/05/Saundbum-500x500.jpg" },
    { name: "Дополнительное звуковое оборудование", logo: "	https://patriot.ua/wp-content/uploads/2020/05/Additional-sound-equipment-500x500.jpg" },
];

const Sound = () => {
    return (
        <div className="p-16">
            <div className="grid grid-cols-3 gap-4">
                {sound.map((sound, index) => (
                    <div
                        key={index}
                        className={` rounded-lg overflow-hidden shadow-md transition duration-300 ${index === 0 ? "border-black" : ""
                            }`}
                    >
                        <div className="p-4 flex justify-center items-center h-48 bg-white">
                            <img
                                src={sound.logo}
                                alt={sound.name}
                                className="h-32 object-contain"
                            />
                        </div>
                        <div
                            className={`p-4 flex justify-between items-center transition duration-300 group hover:bg-black hover:text-white`}
                        >
                            <span className="font-medium">{sound.name}</span>
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

export default Sound;