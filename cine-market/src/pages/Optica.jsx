import React from "react";

const optica = [
  { name: "Оптика формату FULL FRAME", logo: "https://patriot.ua/wp-content/uploads/2020/05/LARDZHformat-500x500.jpg" },
  { name: "COOKE Оптика", logo: "https://patriot.ua/wp-content/uploads/2020/05/kuky2-500x500.jpg" },
  { name: "Оптика LEICA", logo: "	https://patriot.ua/wp-content/uploads/2020/05/Ley-ka-1-500x500.jpg" },
  { name: "Оптика ZEISS", logo: "	https://patriot.ua/wp-content/uploads/2020/05/tsay-s-1-500x500.jpg" },
  { name: "Комплекты диоптрий", logo: "	https://patriot.ua/wp-content/uploads/2020/05/dyoptryy-500x500.jpg" },
  { name: "Анаморфная оптика", logo: "	https://patriot.ua/wp-content/uploads/2020/05/ANAMORPHS-500x500.jpg" },
  { name: "Оптика для винтажного изображения", logo: "	https://patriot.ua/wp-content/uploads/2020/05/VYNTAZH-500x500.jpg" },
  { name: "Комплекты диоптрий", logo: "	https://patriot.ua/wp-content/uploads/2020/05/SONYemount-500x500.jpg" },
  { name: "Ширококутова оптика", logo: "https://patriot.ua/wp-content/uploads/2020/05/ANAMORPHS-500x500.jpg" },
  { name: "Зум-объективы", logo: "https://patriot.ua/wp-content/uploads/2020/05/ZUMY-500x500.jpg" },
  { name: "Длиннофокусная оптика", logo: "https://patriot.ua/wp-content/uploads/2020/05/TELE-500x500.jpg" },
  { name: "Макро Оптика", logo: "https://patriot.ua/wp-content/uploads/2020/05/MAKRO-500x500.jpg" },
  { name: "Специальная оптика", logo: "	https://patriot.ua/wp-content/uploads/2019/06/SpecialEFFlaowa-1024-500x500.jpg" },
  { name: "Оптика для цифровых зеркальных фотокамер CANON", logo: "	https://patriot.ua/wp-content/uploads/2020/05/CANONef-500x500.jpg" },
  { name: "Оптика с креплением MFT", logo: "	https://patriot.ua/wp-content/uploads/2020/05/MFT-500x500.jpg" },
  { name: "Оптика формата Super 16", logo: "https://patriot.ua/wp-content/uploads/2020/06/2YKonkaDlyaSuper16-500x500.jpg" },
];

const Optica = () => {
  return (
    <div className="p-12">
      <h1 className="text-2xl font-semibold mb-6">Оптика</h1>
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
