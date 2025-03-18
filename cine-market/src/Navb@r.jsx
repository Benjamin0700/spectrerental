import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBasket, MoreVertical, Menu } from "lucide-react";

const Navbar = () => {
  const [small, setSmall] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSmall(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 z-50 bg-white transition-all duration-300 shadow-md ${
        small ? "h-12 px-4" : "h-16 px-6"
      } flex items-center w-full md:left-0 lg:left-64`}
    >
      {/* 📱 Mobile Menu Button (Tablet & Mobile) */}
      <button className="md:block lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
        <Menu size={24} className="text-gray-700" />
      </button>

      {/* 🌐 Desktop Links (Centered on Large Screens) */}
      <div className="hidden lg:flex flex-1 justify-center items-center gap-6 text-gray-700 font-medium">
        <Link to="/contacts" className="hover:text-gray-500 transition">Контакты</Link>
        <Link to="/works" className="hover:text-gray-500 transition">Наши работы</Link>
        <Link to="/price" className="hover:text-gray-500 transition">Прайс</Link>
        <Link to="/locations" className="hover:text-gray-500 transition">Локации</Link>
      </div>

      {/* 🔎 Search Input (Right Side on Large Screens, Centered on Small Screens) */}
      <div className="relative w-1/4">
        <input
          type="text"
          placeholder="Search here"
          className="w-full p-2 pl-4 border rounded-lg text-gray-600 focus:outline-none"
        />
        <Search className="absolute right-3 top-3 text-gray-400" size={18} />
      </div>
      
      {/* 🛒 Basket & More menu */}
      <div className="flex items-center gap-4">
        {/* 🛒 Basket Icon */}
        <Link to="/basket" className="relative bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition">
          <ShoppingBasket className="text-gray-600" size={20} />
        </Link>

        {/* ⋮ Mobile Menu Button (Only on Tablet & Mobile) */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-200">
          <MoreVertical size={24} className="text-gray-700" />
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
