import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center">
      
      {/* 1. Üst Kısım: Logo ve Sosyal İkonlar */}
      <div className="w-full bg-white flex justify-center py-10 px-6 lg:px-10">
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h3 className="font-bold text-2xl text-slate-800">Bandage</h3>
          <div className="flex gap-4 text-[#23A6F0]">
            <Facebook className="w-6 h-6 cursor-pointer hover:text-blue-700" />
            <Instagram className="w-6 h-6 cursor-pointer hover:text-blue-700" />
            <Twitter className="w-6 h-6 cursor-pointer hover:text-blue-700" />
          </div>
        </div>
      </div>

      {/* Araya İnce Çizgi (Divider) */}
      <div className="w-full border-t border-gray-200"></div>

      {/* 2. Orta Kısım: Linkler ve Abonelik Formu */}
      <div className="w-full bg-white flex justify-center py-12 px-6 lg:px-10">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between gap-10 lg:gap-4">

          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-slate-800 text-base">Company Info</h5>
            <nav className="flex flex-col gap-3 text-sm font-bold text-gray-500">
              <a href="#" className="hover:text-slate-800">About Us</a>
              <a href="#" className="hover:text-slate-800">Carrier</a>
              <a href="#" className="hover:text-slate-800">We are hiring</a>
              <a href="#" className="hover:text-slate-800">Blog</a>
            </nav>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-slate-800 text-base">Legal</h5>
            <nav className="flex flex-col gap-3 text-sm font-bold text-gray-500">
              <a href="#" className="hover:text-slate-800">About Us</a>
              <a href="#" className="hover:text-slate-800">Carrier</a>
              <a href="#" className="hover:text-slate-800">We are hiring</a>
              <a href="#" className="hover:text-slate-800">Blog</a>
            </nav>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-slate-800 text-base">Features</h5>
            <nav className="flex flex-col gap-3 text-sm font-bold text-gray-500">
              <a href="#" className="hover:text-slate-800">Business Marketing</a>
              <a href="#" className="hover:text-slate-800">User Analytic</a>
              <a href="#" className="hover:text-slate-800">Live Chat</a>
              <a href="#" className="hover:text-slate-800">Unlimited Support</a>
            </nav>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-slate-800 text-base">Resources</h5>
            <nav className="flex flex-col gap-3 text-sm font-bold text-gray-500">
              <a href="#" className="hover:text-slate-800">IOS & Android</a>
              <a href="#" className="hover:text-slate-800">Watch a Demo</a>
              <a href="#" className="hover:text-slate-800">Customers</a>
              <a href="#" className="hover:text-slate-800">API</a>
            </nav>
          </div>

          {/* Get In Touch (Form) */}
          <div className="flex flex-col gap-4 lg:max-w-[320px]">
            <h5 className="font-bold text-slate-800 text-base">Get In Touch</h5>
            {/* Input ve Buton (Yan yana yapıştırılmış) */}
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 bg-gray-50 text-sm px-4 py-3 w-full rounded-l focus:outline-none focus:ring-1 focus:ring-[#23A6F0]"
              />
              <button className="bg-[#23A6F0] text-white px-6 py-3 text-sm rounded-r border border-[#23A6F0] hover:bg-blue-500 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500">Lore imp sum dolor Amit</p>
          </div>

        </div>
      </div>

      {/* 3. Alt Kısım: Gri Arka Planlı Copyright Yazısı */}
      <div className="w-full bg-gray-50 flex justify-center py-6 px-6 lg:px-10">
        <div className="w-full max-w-7xl flex items-center justify-center md:justify-start">
          <p className="text-sm font-bold text-gray-500 text-center md:text-left">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>

    </footer>
  );
}