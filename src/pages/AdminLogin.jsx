// src/pages/AdminLogin.js
import React, { useState } from "react";

export default function AdminLogin({ onLogin }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login === "99 867 70 00" && password === "7000") {
      onLogin();
    } else {
      setError("❌ Login yoki parol xato!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-4">🔐 Admin Login</h2>
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className="w-full p-2 border rounded mb-3"
          required
        />
        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Kirish
        </button>
      </form>
    </div>
  );
}
