import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { ShoppingCart, Star, Camera, Film, Lightbulb, Video } from "lucide-react";

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-[500px] flex items-center justify-center" style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}>
                <div className="text-center text-white bg-black bg-opacity-50 p-6 rounded-xl">
                    <h1 className="text-5xl font-bold">CineMarket - Professional Filmmaking Gear</h1>
                    <p className="text-lg mt-2">Find the best cameras, stabilizers, and accessories for your creative projects</p>
                    <Button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg">Explore Products</Button>
                </div>
            </section>

            {/* Categories */}
            <section className="container mx-auto py-12 px-6">
                <h2 className="text-3xl font-semibold text-center mb-8">Popular Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {[{ name: "Cameras", icon: Camera }, { name: "Lenses", icon: Film }, { name: "Lighting", icon: Lightbulb }, { name: "Stabilizers", icon: Video }].map((category, index) => (
                        <NavLink key={index} to={`/${category.name.toLowerCase()}`} className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center gap-3 hover:shadow-xl transition">
                            <category.icon className="w-10 h-10 text-gray-700" />
                            <span className="text-lg font-medium">{category.name}</span>
                        </NavLink>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section className="bg-white py-12 px-6">
                <h2 className="text-3xl font-semibold text-center mb-8">Best Sellers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="p-6 bg-gray-50 shadow-md rounded-xl">
                            <div className="bg-gray-300 h-48 rounded-md mb-4"></div>
                            <h3 className="text-xl font-semibold">Product Name</h3>
                            <p className="text-gray-600">Short description of the product.</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-lg font-bold text-blue-600">$499</span>
                                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
                                    <ShoppingCart className="w-4 h-4" /> Buy
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="container mx-auto py-12 px-6 text-center">
                <h2 className="text-3xl font-semibold mb-6">What Our Customers Say</h2>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    {["Best equipment!", "Great customer service!", "Fast shipping!"].map((quote, index) => (
                        <div key={index} className="bg-white shadow-lg p-6 rounded-xl flex flex-col items-center">
                            <Star className="w-8 h-8 text-yellow-500" />
                            <p className="text-lg font-medium mt-2">{quote}</p>
                        </div>
                    ))}
                </div>
            </section>  
        </div>
    );
};

export default Home;
