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
        <div className="p-10">
            <h1 className="text-2xl font-semibold mb-6">Звук</h1>
            <div className="grid grid-cols-3 gap-4">
                {sound.map((sound, index) => (
                    <div
                        key={index}
                        className={`border rounded-lg overflow-hidden shadow-md transition duration-300 ${index === 0 ? "border-black" : ""
                            }`}
                    >
                        <div className="p-4 flex justify-center items-center h-48 bg-white">
                            <img
                                src={sound.logo}
                                alt={sound.name}
                                className="h-38 object-contain"
                            />
                        </div>
                        <div
                            className={`p-4 flex justify-between items-center transition duration-300 ${index === 0 ? "bg-black text-white" : "bg-gray-200"
                                } hover:bg-black hover:text-white`}
                        >
                            <span className="font-medium">{sound.name}</span>
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

export default Sound;