import React from "react";

const filters = [
    { name: "Стеклянные фильтры 6x6", logo: "https://patriot.ua/wp-content/uploads/2021/03/6x6-true-streak-blue-all.jpg" },
    { name: "Стеклянные фильтры 4x5.6", logo: "https://patriot.ua/wp-content/uploads/2021/03/true-streak-clear-all.jpg" },
    { name: "Стеклянные фильтры 4x4", logo: "https://patriot.ua/wp-content/uploads/2020/02/4A62A0110-1-500x500.jpg" },
    { name: "Фильтры с резьбовым креплением", logo: "https://patriot.ua/wp-content/uploads/2021/08/HOYA-filters-500x500.jpg" },
];

const Filters = () => {
    return (
        <div className="p-4 md:p-8 lg:p-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filters.map((filter, index) => (
                    <div
                        key={index}
                        className="rounded-lg overflow-hidden shadow-md transition duration-300 border border-gray-200"
                    >
                        <div className="p-4 flex justify-center items-center h-40 md:h-48 bg-white">
                            <img
                                src={filter.logo}
                                alt={filter.name}
                                className="h-24 md:h-32 object-contain"
                            />
                        </div>
                        {/* Hover bo‘lganda butun card qora bo‘lishi uchun `group` qo‘shildi */}
                        <div className="p-4 flex justify-between items-center transition duration-300 group hover:bg-black hover:text-white">
                            <span className="font-medium text-sm md:text-base text-center">{filter.name}</span>
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

export default Filters;
