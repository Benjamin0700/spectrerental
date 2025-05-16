// src/components/LogoutModal.js
import React from "react";

export default function LogoutModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center w-80">
        <p className="text-lg mb-4">Chiqishni xohlaysizmi?</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Ha
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          >
            Yo'q
          </button>
        </div>
      </div>
    </div>
  );
}
