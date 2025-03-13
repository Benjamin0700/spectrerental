import React from "react";

const cranes = [
  { name: "Оборудование PANTHER", logo: "	https://patriot.ua/wp-content/uploads/2020/05/Panter-1-500x500.jpg" },
  { name: "Оборудование MOVIE TECH", logo: "	https://patriot.ua/wp-content/uploads/2020/05/muvytek-1-500x500.jpg" },
  { name: "Оборудование GRIP FACTORY", logo: "	https://patriot.ua/wp-content/uploads/2020/05/GripFactory-500x500.jpg" },
  { name: "Оборудование CINETECH", logo: "	https://patriot.ua/wp-content/uploads/2020/05/SYnetek-500x500.jpg" },
  { name: "Рельсы для тележек и аксессуары", logo: "https://patriot.ua/wp-content/uploads/2019/06/PEREZALYVmovie-tech-tracks-1-500x500.jpg" },
  { name: "Слайдери", logo: "	https://patriot.ua/wp-content/uploads/2020/05/Slay-dery-500x500.jpg" },
];

const Cranes = () => {
  return (
    <div className="p-12">
      <h1 className="text-2xl font-semibold mb-6">Краны</h1>
      <div className="grid grid-cols-3 gap-4">
        {cranes.map((cranes, index) => (
          <div
            key={index}
            className={`border rounded-lg overflow-hidden shadow-md transition duration-300 ${index === 0 ? "border-black" : ""}`}
          >
            <div className="p-4 flex justify-center items-center h-48 bg-white">
              <img
                src={cranes.logo}
                alt={cranes.name}
                className="h-38 object-contain"
              />
            </div>
            <div
              className={`p-4 flex justify-between items-center transition duration-300 ${
                index === 0 ? "bg-black text-white" : "bg-gray-200"
              } hover:bg-black hover:text-white`}
            >
              <span className="font-medium">{cranes.name}</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 hover:bg-gray-700">
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

export default Cranes;
