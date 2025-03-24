import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Accessories from "./pages/Accessories";
import Cameras from "./pages/Cameras";
import Cranes from "./pages/Cranes";
import Filters from "./pages/Filters";
import Grip from "./pages/Grip";
import Home from "./pages/Home";
import Light from "./pages/Light";
import Optica from "./pages/Optica";
import PowerEquipment from "./pages/PowerEquipment";
import Sound from "./pages/Sound";
import SpecialEffects from "./pages/SpecialEffects";
import Stabilization from "./pages/Stabilization";
import Transport from "./pages/Transport";
import VideoControl from "./pages/VideoControl";
import Navbar from "./Navb@r"; // Navbar yangilanadi
import "./index.css";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react"; // Sidebar tugmachasi uchun ikonka

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar setSidebarOpen={setSidebarOpen} />

        <div className="flex flex-1">
          {/* Sidebar: Katta ekranda doim ko‘rinib turadi, kichik ekranda tugma orqali ochiladi */}
          <div className="hidden lg:block flex-shrink-0">
            <Sidebar />
          </div>

          {/* Mobil versiya uchun Sidebar tugmachasi */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed top-3 left-3 bg-gray-800 text-white p-2 rounded-md z-50"
          >
            <Menu size={24} />
          </button>

          {/* Mobil Sidebar (faqat kichik ekranda ochiladi) */}
          {sidebarOpen && (
            <div className="fixed inset-0 bg-white bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)}>
              <div className="w-64 bg-white h-full shadow-lg">
                <Sidebar />
              </div>
            </div>
          )}

          {/* Asosiy content: Sidebar'ni hisobga olib moslashadi */}
          <div className="flex-1 lg:ml-64 p-6 bg-gray-100">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/cameras" element={<Cameras />} />
              <Route path="/cranes" element={<Cranes />} />
              <Route path="/filters" element={<Filters />} />
              <Route path="/grip" element={<Grip />} />
              <Route path="/home" element={<Home />} />
              <Route path="/light" element={<Light />} />
              <Route path="/optica" element={<Optica />} />
              <Route path="/power-equipment" element={<PowerEquipment />} />
              <Route path="/sound" element={<Sound />} />
              <Route path="/special-effects" element={<SpecialEffects />} />
              <Route path="/stabilization" element={<Stabilization />} />
              <Route path="/transport" element={<Transport />} />
              <Route path="/video-control" element={<VideoControl />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
