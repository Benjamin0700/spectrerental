import React from "react";

const stabilization = [
  { name: "DJI Ronin-S", text: "Профессиональный стабилизатор", logo: "https://example.com/ronin-s.jpg" },
  { name: "Zhiyun Crane 3", text: "3-осевой стабилизатор", logo: "https://example.com/zhiyun-crane-3.jpg" },
  { name: "FeiyuTech AK2000", text: "Стабилизатор для камер", logo: "https://example.com/feiyu-ak2000.jpg" },
  { name: "", text: "", logo: "" }, // Bo‘sh element yashiriladi
];

const defaultImage = "https://via.placeholder.com/150"; // Zaxira rasm

const Stabilization = () => {
    return (
        <div className="p-4 sm:p-6 lg:p-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stabilization
                    .filter((item) => item.name.trim() !== "" && item.logo.trim() !== "")
                    .map((item, index) => (
                        <div
                            key={index}
                            className="group rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-xl"
                        >
                            {/* Image */}
                            <div className="p-4 flex justify-center items-center h-40 bg-white">
                                <img
                                    src={item.logo || defaultImage}
                                    alt={item.name}
                                    className="h-full object-contain"
                                />
                            </div>

                            {/* Title + Button */}
                            <div className="p-4 flex flex-col items-center text-center transition duration-300 bg-gray-100 group-hover:bg-black group-hover:text-white">
                                <span className="font-semibold">{item.name}</span>
                                <span className="text-sm opacity-80">{item.text}</span>

                                {/* Hidden Button */}
                                <button className="w-full mt-4 py-2 px-4 text-white rounded-lg flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
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
                                    ЗАПРОС ЦЕНЫ
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Stabilization;
