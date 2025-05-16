// src/pages/AdminWrapper.js
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import AdminPage from "./AdminPage";
import AdminLogin from "./AdminLogin";
import LogoutModal from "./LogoutModal"; // modal komponentini shu yerga joylang yoki shu yerda yozing

export default function AdminWrapper() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("admin-auth") === "true");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("admin-auth", "true");
  };

  const handleLogout = () => setShowLogoutModal(true);

  const confirmLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("admin-auth");
    setShowLogoutModal(false);
  };

  const cancelLogout = () => setShowLogoutModal(false);

  if (!isLoggedIn) {
    // agar login bo'lmasa admin-login sahifasiga yo'naltiradi
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div>
      <div className="fixed top-20 right-6 z-50">
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Chiqish
        </button>
      </div>
      <AdminPage />
      {showLogoutModal && (
        <LogoutModal onConfirm={confirmLogout} onCancel={cancelLogout} />
      )}
    </div>
  );
}
