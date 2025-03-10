import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Accessories from './pages/Accessories';
import Cameras from './pages/Cameras';
import Cranes from './pages/Cranes';
import Filters from './pages/Filters';
import Grip from './pages/Grip';
import Home from "./pages/Home"; // Home sahifasi
import Light from './pages/Light';
import Optica from './pages/Optica';
import PowerEquipment from './pages/PowerEquipment';
import Sound from './pages/Sound';
import SpecialEffects from './pages/SpecialEffects';
import Stabilization from './pages/Stabilization';
import Transport from './pages/Transport'
import VideoControl from './pages/VideoControl';
import Navbar from './Navb@r';
import Sidebar from "./Sidebar";
import { Home as LucideHome } from 'lucide-react'; // Lucide Home ikonkasi boshqa nom bilan import qilindi

const App = () => {
  return (
    <div>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-1">
            <Sidebar />
            <div className="flex-1 p-6 bg-gray-1
            00">
              <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/accessories" element={<Accessories />} />
                <Route path="/cameras" element={<Cameras />} />
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
    </div>
  )
}

export default App;
