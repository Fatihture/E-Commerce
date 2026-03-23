import { useState } from 'react';
import { useSelector } from 'react-redux';
import md5 from 'md5';

import { 
  Menu, ShoppingCart, User, Search, Heart, 
  Phone, Mail, Instagram, Youtube, Facebook, Twitter, ChevronDown 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const user = useSelector(state => state.client.user); 
  const categories = useSelector(state => state.product.categories); // YENİ EKLENDİ

  // Kadın ve Erkek kategorilerini ayırıyoruz
  const womenCategories = categories?.filter(c => c.gender === 'k') || [];
  const menCategories = categories?.filter(c => c.gender === 'e') || [];

  return (
    <header className="w-full">
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

      <div className="flex justify-between items-center p-4 lg:px-10 max-w-[1980px] mx-auto w-full">
        
        <div className="flex-1 flex justify-start">
          <h3 className="font-bold text-2xl text-slate-800">Bandage</h3>
        </div>
        
        <nav className="hidden lg:flex flex-1 justify-center gap-8 text-sm font-bold text-gray-500">
          <Link className="hover:text-slate-800 transition-colors" to="/">Home</Link>
          
          {/* YENİ EKLENDİ: DROPDOWN MENÜ */}
          <div className="relative group">
            <Link className="hover:text-slate-800 transition-colors flex items-center gap-1" to="/shop">
              Shop <ChevronDown className="w-4 h-4" />
            </Link>
            
            <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-md p-4 flex gap-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="flex flex-col gap-2 min-w-[120px]">
                <h3 className="font-bold text-slate-800 border-b pb-1">Kadın</h3>
                {womenCategories.map(cat => (
                  <Link 
                    key={cat.id} 
                    to={`/shop/kadin/${cat.code.split(':')[1]}/${cat.id}`}
                    className="text-gray-500 hover:text-[#23A6F0] text-sm"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2 min-w-[120px]">
                <h3 className="font-bold text-slate-800 border-b pb-1">Erkek</h3>
                {menCategories.map(cat => (
                  <Link 
                    key={cat.id} 
                    to={`/shop/erkek/${cat.code.split(':')[1]}/${cat.id}`}
                    className="text-gray-500 hover:text-[#23A6F0] text-sm"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* DROPDOWN MENÜ BİTİŞİ */}

          <Link className="hover:text-slate-800 transition-colors" to="/about">About</Link>
          <Link className="hover:text-slate-800 transition-colors" to="/blog">Blog</Link>
          <Link className="hover:text-slate-800 transition-colors" to="/contact">Contact</Link>
          <Link className="hover:text-slate-800 transition-colors" to="/pages">Pages</Link>
        </nav>

        <div className="flex flex-1 justify-end items-center gap-4 md:gap-6 text-[#23A6F0]">
          {user?.name ? (
            <div className="hidden lg:flex items-center gap-2 font-bold text-sm text-slate-800">
              <img 
                src={`https://www.gravatar.com/avatar/${md5(user.email.trim().toLowerCase())}?d=mp`} 
                alt="Profile" 
                className="w-8 h-8 rounded-full border border-gray-200"
              />
              <span>{user.name}</span>
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/login" className="flex items-center gap-1 cursor-pointer font-bold text-sm hover:text-blue-700 transition-colors">
                <User className="w-5 h-5" />
                <span>Login</span>
              </Link>
              <span className="text-gray-400">/</span>
              <Link to="/signup" className="cursor-pointer font-bold text-sm hover:text-blue-700 transition-colors">
                Register
              </Link>
            </div>
          )}
          
          <Search className="w-5 h-5 cursor-pointer hover:text-blue-700 transition-colors" />
          
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-700 transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden lg:inline text-xs font-normal">1</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-1 cursor-pointer hover:text-blue-700 transition-colors">
            <Heart className="w-5 h-5" />
            <span className="text-xs font-normal">1</span>
          </div>

          <Menu 
            className="lg:hidden w-6 h-6 cursor-pointer text-slate-800" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>

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