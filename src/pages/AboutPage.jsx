import { Facebook, Instagram, Twitter, Play } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full bg-white">

      {/* 1. Hero Bölümü */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Sol Metin Alanı */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <h5 className="font-bold text-slate-800 text-sm tracking-wide">ABOUT COMPANY</h5>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
              ABOUT US
            </h1>
            <p className="text-gray-500 max-w-sm text-sm lg:text-base">
              We know how large objects will act, but things on a small scale
            </p>
            <button className="bg-[#23A6F0] hover:bg-blue-500 text-white font-bold py-3 px-8 rounded text-sm transition-colors mt-2">
              Get Quote Now
            </button>
          </div>

          {/* Sağ Görsel Alanı */}
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* Figma'dan sarı elbiseli kızı indirip about-hero.png olarak public'e at */}
            <img 
              src="/About/about1.png" 
              alt="About Us Hero" 
              className="w-full max-w-md lg:max-w-full h-auto object-contain" 
            />
          </div>
        </div>
      </section>

      {/* 2. Açıklama ve İstatistikler Bölümü */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-12">
        {/* Üstteki İki Kolonlu Yazı */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-20">
          <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
            <h5 className="text-[#E74040] text-sm font-bold">Problems trying</h5>
            <h2 className="text-2xl font-bold text-slate-800 max-w-md mx-auto lg:mx-0">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            </h2>
          </div>
          <div className="w-full lg:w-1/2 flex items-center text-center lg:text-left">
            <p className="text-gray-500 text-sm">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>

        {/* 4'lü İstatistikler */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-between items-center gap-10 lg:gap-4">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl font-bold text-slate-800">15K</h1>
            <h5 className="text-gray-500 font-bold text-sm">Happy Customers</h5>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl font-bold text-slate-800">150K</h1>
            <h5 className="text-gray-500 font-bold text-sm">Monthly Visitors</h5>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl font-bold text-slate-800">15</h1>
            <h5 className="text-gray-500 font-bold text-sm">Countries Worldwide</h5>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl font-bold text-slate-800">100+</h1>
            <h5 className="text-gray-500 font-bold text-sm">Top Partners</h5>
          </div>
        </div>
      </section>

      {/* 3. Video Bölümü */}
      <section className="w-full max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gray-300 flex justify-center items-center shadow-lg">
          {/* Figma'dan dağ manzarasını about-video-bg.jpg olarak kaydet */}
          <img src="/About/about2.png" alt="Video Background" className="absolute inset-0 w-full h-full object-cover" />
          {/* Play Butonu */}
          <button className="relative z-10 bg-[#23A6F0] w-20 h-20 rounded-full flex justify-center items-center text-white hover:scale-110 transition-transform">
            <Play className="w-8 h-8 ml-1" fill="currentColor" />
          </button>
        </div>
      </section>

      {/* 4. Meet Our Team Bölümü */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-16 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
          <p className="text-gray-500 max-w-sm mx-auto text-sm">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Takım Kartları */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          
          {/* Üye 1 */}
          <div className="flex flex-col items-center bg-white shadow-md overflow-hidden w-full md:w-1/3">
            <div className="w-full h-[250px] bg-gray-200">
              <img src="/About/about3.jpg" alt="Team Member 1" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col items-center gap-2">
              <h5 className="font-bold text-slate-800">Username</h5>
              <h6 className="text-gray-500 text-sm font-bold mb-2">Profession</h6>
              <div className="flex gap-4 text-[#23A6F0]">
                <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-700" />
                <Instagram className="w-5 h-5 cursor-pointer hover:text-blue-700" />
                <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-700" />
              </div>
            </div>
          </div>

          {/* Üye 2 */}
          <div className="flex flex-col items-center bg-white shadow-md overflow-hidden w-full md:w-1/3">
            <div className="w-full h-[250px] bg-gray-200">
              <img src="/About/about4.jpg" alt="Team Member 2" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col items-center gap-2">
              <h5 className="font-bold text-slate-800">Username</h5>
              <h6 className="text-gray-500 text-sm font-bold mb-2">Profession</h6>
              <div className="flex gap-4 text-[#23A6F0]">
                <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-700" />
                <Instagram className="w-5 h-5 cursor-pointer hover:text-blue-700" />
                <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-700" />
              </div>
            </div>
          </div>

          {/* Üye 3 */}
          <div className="flex flex-col items-center bg-white shadow-md overflow-hidden w-full md:w-1/3">
            <div className="w-full h-[250px] bg-gray-200">
              <img src="/About/about5.jpg" alt="Team Member 3" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col items-center gap-2">
              <h5 className="font-bold text-slate-800">Username</h5>
              <h6 className="text-gray-500 text-sm font-bold mb-2">Profession</h6>
              <div className="flex gap-4 text-[#23A6F0]">
                <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-700" />
                <Instagram className="w-5 h-5 cursor-pointer hover:text-blue-700" />
                <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-700" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Markalar (Big Companies Are Here) */}
      <section className="w-full bg-gray-50 py-20 text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Big Companies Are Here</h2>
        <p className="text-gray-500 max-w-sm mx-auto text-sm mb-12">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto px-10 gap-8 md:gap-4">
          <img src="/shop/logo1.png" alt="Hooli" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="/shop/logo2.png" alt="Lyft" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="/shop/logo3.png" alt="Stripe" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="/shop/logo4.png" alt="AWS" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="/shop/logo5.png" alt="Reddit" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="/shop/logo6.png" alt="Pied Piper" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
        </div>
      </section>

      {/* 6. Work With Us (Bottom CTA - Edge to Edge) */}
      <section className="w-full flex flex-col lg:flex-row">
        
        {/* Sol Mavi Alan */}
        <div className="w-full lg:w-2/3 bg-[#2A7CC7] flex items-center justify-center py-24 px-10">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-white max-w-md gap-6">
            <h5 className="font-bold tracking-widest text-sm">WORK WITH US</h5>
            <h2 className="text-4xl font-bold">Now Let's grow Yours</h2>
            <p className="text-sm">
              The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
            </p>
            <button className="border border-white text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-[#2A7CC7] transition-colors mt-2">
              Button
            </button>
          </div>
        </div>

        {/* Sağ Görsel Alanı */}
        <div className="w-full lg:w-1/3 h-[400px] lg:h-auto">
          {/* Pembe kazaklı kadını about-cta.jpg olarak kaydet */}
          <img src="/About/about6.png" alt="Work with us" className="w-full h-full object-cover" />
        </div>

      </section>

    </div>
  );
}