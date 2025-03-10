import React from "react";

const cameras = [
    { name: "ARRI", logo: "https://cdn.worldvectorlogo.com/logos/arri.svg" },
    { name: "RED", logo: "https://upload.wikimedia.org/wikipedia/en/3/36/Red-Camera-Logo.jpeg" },
    { name: "SONY", logo: "https://logowik.com/content/uploads/images/305_sony.jpg" },
    { name: "Blackmagic", logo: "https://vectorlogoseek.com/wp-content/uploads/2019/03/blackmagic-design-vector-logo.png" },
    { name: "Canon", logo: "https://images.seeklogo.com/logo-png/2/1/canon-logo-png_seeklogo-25733.png" },
    { name: "Phantom", logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032018/untitled-1_460.png?5lRiNZQWy8.Vwr2NNp_GpKCQ_Whvns7d&itok=brSvlK-E" },
    { name: "Dji Osmo", logo: "https://logowik.com/content/uploads/images/dji3302.logowik.com.webp" },
    { name: "Gopro", logo: "https://www.brand2global.com/wp-content/uploads/2017/07/gopro-logo-500x500.png" },
    { name: "Panasonic", logo: "https://kreafolk.com/cdn/shop/articles/panasonic-logo-design-history-and-evolution-kreafolk_e22aef50-03d3-44ad-9c51-839d87728434.jpg?v=1717725026&width=2048" },
    { name: "Freefly", logo: "https://cattscamera.com/img/cms/JESUS/Freefly-logo.png" },
];

const Cameras = () => {
    return (
        <div className="p-10">
            <h1 className="text-2xl font-semibold mb-6">Камеры</h1>
            <div className="grid grid-cols-3 gap-4">
                {cameras.map((camera, index) => (
                    <div
                        key={index}
                        className={`border rounded-lg overflow-hidden shadow-md transition duration-300 ${index === 0 ? "border-black" : ""
                            }`}
                    >
                        <div className="p-4 flex justify-center items-center h-48 bg-white">
                            <img
                                src={camera.logo}
                                alt={camera.name}
                                className="h-38 object-contain"
                            />
                        </div>
                        <div
                            className={`p-4 flex justify-between items-center transition duration-300 ${index === 0 ? "bg-black text-white" : "bg-gray-200"
                                } hover:bg-black hover:text-white`}
                        >
                            <span className="font-medium">Камеры {camera.name}</span>
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

export default Cameras;
