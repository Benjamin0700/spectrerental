import React from "react";

const video = [
  { name: "Наборы DIT/Воспроизведения", logo: "https://patriot.ua/wp-content/uploads/2020/05/DYT-500x500.jpg" },
  { name: "ПРЯМАЯ ТРАНСЛЯЦИЯ", logo: "https://patriot.ua/wp-content/uploads/2020/03/072A39912-kopyya-1-500x500.jpg" },
  { name: "Оборудование для плейбека", logo: "https://patriot.ua/wp-content/uploads/2020/05/Oborudovanye-dlyaPLEY-BEKA-500x500.jpg" },
  { name: "Рейд накопители", logo: "https://patriot.ua/wp-content/uploads/2020/05/REy-dy-500x500.jpg" },
  { name: "Программное обеспечение", logo: "https://patriot.ua/wp-content/uploads/2020/05/Progr.Obespechenye-500x500.jpg" },
  { name: "Переносные видео/аудио рекордеры и мониторы", logo: "https://patriot.ua/wp-content/uploads/2020/05/Perenosnye-vydeo-audyo-rekordery-y-monytory-500x500.jpg" },
  { name: "Комплекты радиопередатчиков сигнала", logo: "https://patriot.ua/wp-content/uploads/2020/05/RAdyoperedatchyky-500x500.jpg" },
  { name: "Мониторы", logo: "https://patriot.ua/wp-content/uploads/2020/05/Monytoryperezalyv2GLAVNYH-1-500x500.jpg" },
  { name: "Мобильная ТВ студия АСБ", logo: "https://patriot.ua/wp-content/uploads/2020/05/TVstudyya-1024-500x500.jpg" },
  { name: "Громкая связь", logo: "https://patriot.ua/wp-content/uploads/2020/05/GRomkogovorylky-500x500.jpg" },
  { name: "Рации и гарнитуры", logo: "https://patriot.ua/wp-content/uploads/2020/05/RAtsyy-500x500.jpg" },
];

const VideoControl = () => {
  return (
    <div className="p-16">
      <div className="grid grid-cols-3 gap-4">
        {video.map((video, index) => (
          <div
            key={index}
            className={`border rounded-lg overflow-hidden shadow-md transition duration-300 ${index === 0 ? "border-black" : ""}`}
          >
            <div className="p-4 flex justify-center items-center h-48 bg-white">
              <img
                src={video.logo}
                alt={video.name}
                className="h-32 object-contain"
              />
            </div>
            <div
              className={`p-4 flex justify-between items-center transition duration-300 ${
                index === 0 ? "bg-black text-white" : "bg-gray-200"
              } hover:bg-black hover:text-white`}
            >
              <span className="font-medium">{video.name}</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-md">
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
export default VideoControl;

