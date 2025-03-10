import React from "react";

const optica = [
    { name: "Оптика формату FULL FRAME", logo: "https://patriot.ua/wp-content/uploads/2020/05/LARDZHformat-500x500.jpg" },
    { name: "COOKE Оптика", logo: "https://patriot.ua/wp-content/uploads/2020/05/kuky2-500x500.jpg" },
    { name: "SONY", logo: "" },
    { name: "Blackmagic", logo: "" },
    { name: "Canon", logo: "" },
    { name: "Phantom", logo: "" },
    { name: "Dji Osmo", logo: "" },
    { name: "Gopro", logo: "" },
    { name: "Panasonic", logo: "" },
    { name: "Freefly", logo: "" },
];

const Optica = () => {
    return (
        <div className="p-10">
            <h1 className="text-2xl font-semibold mb-6">Силовое Оборудование</h1>
            <div className="grid grid-cols-3 gap-4">
                {optica.map((optica, index) => (
                    <div
                        key={index}
                        className={`border rounded-lg overflow-hidden shadow-md transition duration-300 ${index === 0 ? "border-black" : ""
                            }`}
                    >
                        <div className="p-4 flex justify-center items-center h-48 bg-white">
                            <img
                                src={optica.logo}
                                alt={optica.name}
                                className="h-38 object-contain"
                            />
                        </div>
                        <div
                            className={`p-4 flex justify-between items-center transition duration-300 ${index === 0 ? "bg-black text-white" : "bg-gray-200"
                                } hover:bg-black hover:text-white`}
                        >
                            <span className="font-medium">{optica.name}</span>
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

export default Optica;
