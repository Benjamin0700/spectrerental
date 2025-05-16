import { NavLink, useNavigate } from "react-router-dom";
import {
    Home, Camera, Aperture, Filter, Package, Video, Volume2,
    Truck, Move, Airplay, Sun, Hand, Sparkles, BatteryCharging, Car
} from "lucide-react";
import React from "react";

const Sidebar = () => {
    const navigate = useNavigate();

    const menuItems = [
        { name: "Главная", icon: Home, path: "/home" },
        { name: "Камеры", icon: Camera, path: "/cameras" },
        { name: "Оптика", icon: Aperture, path: "/optica" },
        { name: "Фильтры", icon: Filter, path: "/filters" },
        { name: "Аксессуары", icon: Package, path: "/accessories" },
        { name: "Видеоконтроль", icon: Video, path: "/video-control" },
        { name: "Звук", icon: Volume2, path: "/sound" },
        { name: "Повозки и Краны", icon: Truck, path: "/cranes" },
        { name: "Стабилизация", icon: Move, path: "/stabilization" },
        { name: "Свет", icon: Sun, path: "/light" },
        { name: "Грипп", icon: Hand, path: "/grip" },
        { name: "Спецэффекты", icon: Sparkles, path: "/special-effects" },
        { name: "Силовое оборудование", icon: BatteryCharging, path: "/power-equipment" },
        { name: "Транспорт", icon: Car, path: "/transport" },
    ];

    return (
        <div className="w-64 bg-white min-h-screen p-4 shadow-lg fixed top-0 left-0 h-full">
            <h1
                className="text-3xl font-bold mb-6 text-center cursor-pointer"
                onClick={() => navigate("/home")}
            >
                <span className="text-gray-600">Spectre</span>
                <span className="text-gray-400">Rental</span>
            </h1>

            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} className="mb-2">
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => `flex items-center gap-2 p-2 rounded cursor-pointer ${isActive ? 'bg-gray-200 font-serif' : 'hover:text-gray-600'}`}
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
