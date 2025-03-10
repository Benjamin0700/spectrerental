import { NavLink } from "react-router-dom";
import { 
    Home, Camera, Aperture, Filter, Package, Video, Volume2, 
    Truck, Move, Airplay, Sun, Hand, Sparkles, BatteryCharging, Car 
} from "lucide-react";
import React from "react";

const Sidebar = () => {
    const menuItems = [
        { name: "Главная", icon: Home, path: "/home" },
        { name: "Камеры", icon: Camera, path: "/cameras" },
        { name: "Оптика", icon: Aperture, path: "/optica" },
        { name: "Фильтры", icon: Filter, path: "/filters" },
        { name: "Аксессуары", icon: Package, path: "/accessories" },
        { name: "Видеоконтроль", icon: Video, path: "/video-control" },
        { name: "Звук", icon: Volume2, path: "/sound" },
<<<<<<< HEAD
        { name: "Повозки и Краны", icon: Truck, path: "/carts-cranes" },
        { name: "Стабилизация", icon: Move, path: "/stabilization" },
        { name: "Копты", icon: Airplay, path: "/drones" },
=======
        { name: "Повозки и Краны", icon: Truck, path: "/cranes" },
        { name: "Стабилизация", icon: Move, path: "/stabilization" },
>>>>>>> 8118b4d (done)
        { name: "Свет", icon: Sun, path: "/light" },
        { name: "Грипп", icon: Hand, path: "/grip" },
        { name: "Спецэффекты", icon: Sparkles, path: "/special-effects" },
        { name: "Силовое оборудование", icon: BatteryCharging, path: "/power-equipment" },
        { name: "Транспорт", icon: Car, path: "/transport" },
    ];

    return (
        <div className="w-64 bg-white min-h-screen p-2 shadow-lg">
            {/* Logo */}
            <h1 className="text-3xl font-bold mb-6 text-center">
                <span className="text-gray-600">Cine</span>
                <span className="text-gray-400">Market</span>
            </h1>

            {/* Menu */}
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} className="mb-2">
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => `flex items-center gap-3 p-2 rounded cursor-pointer ${isActive ? 'bg-gray-200 font-serif' : 'hover:text-gray-600'}`}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
