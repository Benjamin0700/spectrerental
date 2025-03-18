import React from "react";

const stabilization = [
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
  { name: "", text: "", logo: "" },
];

const Stabilization = () => {
    return (
        <div className="p-16">
            <div className="grid grid-cols-3 gap-4">
                {stabilization.map((stabilization, index) => (
                    <div
                        key={index}
                        className="group rounded-lg overflow-hidden shadow-md transition duration-300 hover:border-red-600"
                    >
                        {/* Image */}
                        <div className="p-4 flex justify-center items-center h-48 bg-white">
                            <img
                                src={stabilization.logo}
                                alt={stabilization.name}
                                className="h-32 object-contain"
                            />
                        </div>

                        {/* Title + Button */}
                        <div className="p-4 flex flex-col items-center text-center transition duration-300 bg-gray-200 group-hover:bg-black group-hover:text-white">
                            <span className="font-medium">{stabilization.name}</span>
                            <span className="font-medium">{stabilization.text}</span>

                            {/* Hidden Button */}
                            <button className="w-full mt-4 py-2 px-4 bg-black text-white rounded-lg flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
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
