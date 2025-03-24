import React from "react";

const transport = [
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

const defaultImage = "https://via.placeholder.com/150"; // Zaxira rasm

const Transport = () => {
    return (
        <div className="p-4 sm:p-6 lg:p-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {transport.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg"
                    >
                        <div className="p-4 flex justify-center items-center h-40 bg-white">
                            <img
                                src={item.logo || defaultImage}
                                alt={item.name}
                                className="h-32 object-contain"
                            />
                        </div>
                        <div
                            className="p-4 flex justify-between items-center transition duration-300 bg-gray-200 hover:bg-black hover:text-white"
                        >
                            <span className="font-medium">{item.name}</span>
                            <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-md">
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
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Transport;
