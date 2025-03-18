import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { ShoppingCart } from "lucide-react";
import {
  Camera, Aperture, Filter, Package, Video, Volume2,
  Truck, Move, Sun, Hand, Sparkles, BatteryCharging, Car
} from "lucide-react";

const Home = () => {
  return (
    <div className="p-4 min-h-screen">
      {/* 📌 Categories Section */}
      <section className="container mx-auto py-8 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-8">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {[
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
          ].map((category, index) => (
            <NavLink
              key={index}
              to={category.path}
              className="p-4 md:p-6 bg-white shadow-lg rounded-lg flex flex-col items-center gap-2 hover:shadow-xl transition"
            >
              <category.icon className="w-8 h-8 md:w-10 md:h-10 text-gray-700" />
              <span className="text-sm md:text-lg font-medium">{category.name}</span>
            </NavLink>
          ))}
        </div>
      </section>

      {/* 🌟 Featured Products */}
      <section className="py-8 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-8">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="p-4 md:p-6 bg-gray-50 shadow-md rounded-lg">
              <div className="bg-gray-300 h-32 md:h-48 rounded-md mb-3 md:mb-4"></div>
              <h3 className="text-lg md:text-xl font-semibold">Product Name</h3>
              <p className="text-gray-600 text-sm md:text-base">Short description of the product.</p>
              <div className="flex justify-between items-center mt-3 md:mt-4">
                <span className="text-lg font-bold text-blue-600">$499</span>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-md flex items-center gap-2 text-sm md:text-base">
                  <ShoppingCart className="w-4 h-4" /> Buy
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
