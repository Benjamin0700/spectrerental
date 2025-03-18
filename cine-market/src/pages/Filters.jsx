import React from "react";

const filters = [
    { name: "Стеклянные фильтры 6x6", logo: "https://patriot.ua/wp-content/uploads/2021/03/6x6-true-streak-blue-all.jpg" },
    { name: "Стеклянные фильтры 4x5.6", logo: "https://patriot.ua/wp-content/uploads/2021/03/true-streak-clear-all.jpg" },
    { name: "Стеклянные фильтры 4x4", logo: "https://patriot.ua/wp-content/uploads/2020/02/4A62A0110-1-500x500.jpg" },
    { name: "Фильтры с резьбовым креплением", logo: "https://patriot.ua/wp-content/uploads/2021/08/HOYA-filters-500x500.jpg" },
];

const Filters = () => {
    return (
        <div className="p-16">
            <div className="grid grid-cols-3 gap-4">
                {filters.map((filters, index) => (
                    <div
                        key={index}
                        className={` rounded-lg overflow-hidden shadow-md transition duration-300 ${index === 0 ? "border-black" : ""
                            }`}
                    >
                        <div className="p-4 flex justify-center items-center h-48 bg-white">
                            <img
                                src={filters.logo}
                                alt={filters.name}
                                className="h-32 object-contain"
                            />
                        </div>
                        <div
                            className={`p-4 flex justify-between items-center transition duration-300 group hover:bg-black hover:text-white`}
                        >
                            <span className="font-medium"> {filters.name}</span>
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

export default Filters;