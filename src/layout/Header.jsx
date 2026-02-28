import { useState } from 'react';
import { 
  Menu, ShoppingCart, User, Search, Heart, 
  Phone, Mail, Instagram, Youtube, Facebook, Twitter, ChevronDown 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  // Mobil menünün açık/kapalı durumunu tutan state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* 1. Koyu Renkli Üst Bar (Sadece Masaüstünde Görünür - lg:flex) */}
      <div className="hidden lg:flex justify-between items-center bg-[#252B42] text-white py-4 px-6 font-bold text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>
        <div>
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="flex items-center gap-4">
          <span>Follow Us :</span>
          <Instagram className="w-4 h-4 cursor-pointer hover:text-blue-400" />
          <Youtube className="w-4 h-4 cursor-pointer hover:text-blue-400" />
          <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-400" />
          <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-400" />
        </div>
      </div>

      {/* 2. Ana Header Bar */}
      <div className="flex justify-between items-center p-4 lg:px-10 max-w-[1980px] mx-auto w-full">
        
        {/* Sol Taraf - Logo (flex-1 ile kalan boşluğu alır ve içeriğini sola yaslar) */}
        <div className="flex-1 flex justify-start">
          <h3 className="font-bold text-2xl text-slate-800">Bandage</h3>
        </div>
        
        {/* Orta Taraf - Navigasyon (flex-1 ile alanı kaplar ve içeriğini KUSURSUZ merkeze hizalar) */}
        <nav className="hidden lg:flex flex-1 justify-center gap-8 text-sm font-bold text-gray-500">
          <Link className="hover:text-slate-800 transition-colors" to="/">Home</Link>
          <Link className="hover:text-slate-800 transition-colors flex items-center gap-1" to="/shop">
            Shop <ChevronDown className="w-4 h-4" />
          </Link>
          <Link className="hover:text-slate-800 transition-colors" to="/about">About</Link>
          <Link className="hover:text-slate-800 transition-colors" to="/blog">Blog</Link>
          <Link className="hover:text-slate-800 transition-colors" to="/contact">Contact</Link>
          <Link className="hover:text-slate-800 transition-colors" to="/pages">Pages</Link>
        </nav>

        {/* Sağ Taraf - İkonlar ve Login (flex-1 ile alanı kaplar ve içeriğini sağa yaslar) */}
        <div className="flex flex-1 justify-end items-center gap-4 md:gap-6 text-[#23A6F0]">
          {/* Masaüstü Login / Register */}
          <div className="hidden lg:flex items-center gap-1 cursor-pointer font-bold text-sm hover:text-blue-700 transition-colors">
            <User className="w-5 h-5" />
            <span>Login / Register</span>
          </div>
          
          <Search className="w-5 h-5 cursor-pointer hover:text-blue-700 transition-colors" />
          
          {/* Sepet */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-700 transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden lg:inline text-xs font-normal">1</span>
          </div>
          
          {/* Favoriler (Sadece Masaüstü) */}
          <div className="hidden lg:flex items-center gap-1 cursor-pointer hover:text-blue-700 transition-colors">
            <Heart className="w-5 h-5" />
            <span className="text-xs font-normal">1</span>
          </div>

          {/* Hamburger Menü İkonu (Sadece Mobil) */}
          <Menu 
            className="lg:hidden w-6 h-6 cursor-pointer text-slate-800" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>

      {/* 3. Mobil Açılır Menü (Sadece isMobileMenuOpen true ise ve ekran lg'den küçükse görünür) */}
      {isMobileMenuOpen && (
        <nav className="flex flex-col items-center gap-6 py-10 text-2xl text-gray-500 font-normal lg:hidden">
          <Link className="hover:text-slate-800" to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link className="hover:text-slate-800" to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Product</Link>
          <Link className="hover:text-slate-800" to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
          <Link className="hover:text-slate-800" to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}