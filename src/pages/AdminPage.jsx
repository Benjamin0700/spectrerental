import React, { useEffect, useState } from "react";

const BASE_URL = "https://server-spectrerental-3.onrender.com";
const API_URL = `${BASE_URL}/api/camera`;
const STORAGE_KEY = "uploadedImages";

export default function AdminPage() {
    const [formData, setFormData] = useState({ name: '', title: '', image: null });
    const [images, setImages] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [editImageId, setEditImageId] = useState(null);

    const clearSuccessMsg = () => {
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    const fetchImages = async () => {
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setImages(data);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch {
            const local = localStorage.getItem(STORAGE_KEY);
            setImages(local ? JSON.parse(local) : []);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('title', formData.title);
        if (formData.image) data.append('image', formData.image);

        try {
            const method = editImageId ? 'PUT' : 'POST';
            const url = editImageId ? `${API_URL}/${editImageId}` : API_URL;
            const res = await fetch(url, { method, body: data });
            const result = await res.json();

            if (res.ok) {
                setSuccessMessage(editImageId ? '✅ Muvaffaqiyatli tahrirlandi!' : '✅ Muvaffaqiyatli yuklandi!');
                setFormData({ name: '', title: '', image: null });
                setEditImageId(null);
                fetchImages();
            } else {
                setSuccessMessage(`❌ Xatolik: ${result.message || 'Server xatoligi'}`);
            }
        } catch {
            setSuccessMessage('❌ Tarmoq xatolik yuz berdi');
        }
        clearSuccessMsg();
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Rasmni o'chirmoqchimisiz?")) return;
        try {
            const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error();
            setSuccessMessage('✅ Rasm muvaffaqiyatli o‘chirildi');
            fetchImages();
        } catch {
            setSuccessMessage('❌ O\'chirishda xatolik yuz berdi');
        }
        clearSuccessMsg();
    };

    const handleEdit = (img) => {
        setFormData({ name: img.name, title: img.title, image: null });
        setEditImageId(img._id);
        setSuccessMessage("🖊️ Tahrirlash rejimida. O'zgartirishlaringizni kiriting va 'Yuklash' tugmasini bosing.");
        clearSuccessMsg();
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 md:p-8 lg:p-16">
            <h2 className="text-2xl font-bold mb-6">📸 Camera Yuklash Adminkasi</h2>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm flex flex-col gap-4">
                <input type="text" name="name" placeholder="Camera nomi" value={formData.name} onChange={handleChange} required className="p-2 border rounded-md" />
                <input type="text" name="title" placeholder="Camera info" value={formData.title} onChange={handleChange} required className="p-2 border rounded-md" />
                <input type="file" name="image" accept="image/*" onChange={handleChange} className="p-2 border rounded-md" />
                <button type="submit" className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
                    Yuklash
                </button>
            </form>

            <div className="text-green-600 font-bold mt-4 min-h-[24px]">{successMessage}</div>

            <div className="w-full max-w-sm bg-white mt-6 p-4 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-4">Yuklangan rasmlar</h3>
                <div className="flex flex-col gap-4">
                    {images.length ? images.map((img) => (
                        <div key={img._id} className="flex flex-col items-center border-b pb-4">
                            <img src={`http://localhost:5000/uploads/${img.imageUrl}`} alt={img.name} className="rounded shadow max-w-full" />
                            <div className="font-bold text-gray-800 mt-2">{img.name}</div>
                            <div className="text-sm text-gray-600 text-center">{img.title}</div>
                            <div className="flex gap-2 mt-2">
                                <button onClick={() => handleEdit(img)} className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">Tahrirlash</button>
                                <button onClick={() => handleDelete(img._id)} className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700">O'chirish</button>
                            </div>
                        </div>
                    )) : <p>Hozircha rasm yo‘q.</p>}
                </div>
            </div>
        </div>
    );
}
