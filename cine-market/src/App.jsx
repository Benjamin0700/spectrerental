import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./pages/Home";
import Navbar from './Navb@r';

const App = () => {
  return (
    <div>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-1">
            <Sidebar />
            <div className="flex-1 p-6 bg-gray-100">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
