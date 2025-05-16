import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBasket, MoreVertical, Menu } from "lucide-react";

const Navbar = () => {
  const [small, setSmall] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className={`fixed top-0 right-0 z-50 bg-white transition-all duration-300 shadow-md ${
        small ? "h-12 px-4" : "h-16 px-6"
      } flex items-center justify-between w-full md:left-0 lg:left-64`}
    >
      {/* 📱 Mobile Menu Button (Tablet & Mobile) */}
      <button className="md:block lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
        <Menu size={24} className="text-white" />
      </button>

      {/* 🔎 Search Input */}
      <div className="relative flex-1 max-w-xs mx-auto">
        <input
          type="text"
          placeholder="Search here..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-1.5 pl-4 pr-10 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
      </div>

      {/* 🌐 Desktop Links */}
      <div className="hidden lg:flex flex-1 justify-center items-center gap-6 text-gray-700 font-medium">
        <Link to="/contacts" className="hover:text-gray-500 transition">Контакты</Link>
        <Link to="/works" className="hover:text-gray-500 transition">Наши работы</Link>
        <Link to="/price" className="hover:text-gray-500 transition">Прайс</Link>
        <Link to="/locations" className="hover:text-gray-500 transition">Локации</Link>
        <Link to="/admin" className="hover:text-gray-500 transition">Админка</Link>
      </div>

      <div className="flex items-center gap-4">
        {/* ⋮ Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-200">
          <MoreVertical size={25} className="text-gray-700" />
        </button>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 w-48 bg-white shadow-lg rounded-lg p-2 lg:hidden">
          <nav className="flex flex-col text-gray-700 text-sm">
            <Link to="/contacts" className="p-2 hover:bg-gray-100 rounded">Контакты</Link>
            <Link to="/works" className="p-2 hover:bg-gray-100 rounded">Наши работы</Link>
            <hr className="my-1" />
            <Link to="/price" className="p-2 hover:bg-gray-100 rounded">Прайс</Link>
            <Link to="/locations" className="p-2 hover:bg-gray-100 rounded">Локации</Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
