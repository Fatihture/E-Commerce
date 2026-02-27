import { Menu, ShoppingCart, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 md:px-10 max-w-7xl mx-auto">
      {/* Logo */}
      <h3 className="font-bold text-2xl text-slate-800">Bandage</h3>
      
      {/* Masaüstü Menü (Mobilde gizli) */}
      <nav className="hidden md:flex gap-6 text-sm font-semibold text-gray-500">
        <Link className="hover:text-blue-500" to="/">Home</Link>
        <Link className="hover:text-blue-500" to="/shop">Shop</Link>
        <Link className="hover:text-blue-500" to="/about">About</Link>
        <Link className="hover:text-blue-500" to="/contact">Contact</Link>
      </nav>

      {/* İkonlar */}
      <div className="flex items-center gap-4 text-blue-500">
        <User className="hidden md:block w-5 h-5 cursor-pointer" />
        <span className="hidden md:block text-sm font-semibold cursor-pointer">Login / Register</span>
        <Search className="w-5 h-5 cursor-pointer" />
        <ShoppingCart className="w-5 h-5 cursor-pointer" />
        {/* Hamburger Menü İkonu (Masaüstünde gizli) */}
        <Menu className="md:hidden w-6 h-6 cursor-pointer text-slate-800" />
      </div>
    </header>
  );
}