import ProductCard from '../components/ProductCard';
import Slider from '../components/Slider';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* 1. Hero Section (Slider) */}
      <Slider />

      {/* 2. Editor's Pick Section */}
      <section className="w-full flex flex-col items-center py-20 bg-gray-50">
        {/* Başlık Alanı */}
        <div className="text-center mb-10 px-4">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">EDITOR'S PICK</h2>
          <p className="text-gray-500">Problems trying to resolve the conflict between</p>
        </div>

        {/* Resimler Alanı*/}
        {/* Mobilde alt alta (flex-col), Desktop'ta yan yana (lg:flex-row) */}
        <div className="flex flex-col lg:flex-row gap-4 w-full max-w-7xl mx-auto px-4 h-auto lg:h-[500px]">
          
          {/* MEN Kutusu */}
          <div className="relative w-full lg:w-[40%] h-[400px] lg:h-full bg-gray-300 overflow-hidden">
            <img src="/Home/MEN.jpg" alt="Men" className="w-full h-full object-cover" />
            <button className="absolute bottom-6 left-6 bg-white px-10 py-3 font-bold text-slate-800 hover:bg-gray-100 transition-colors shadow-md">
              MEN
            </button>
          </div>

          {/* WOMEN Kutusu */}
          <div className="relative w-full lg:w-[30%] h-[400px] lg:h-full bg-gray-300 overflow-hidden">
            <img src="/Home/WOMEN1.jpg" alt="Women" className="w-full h-full object-cover" />
            <button className="absolute bottom-6 left-6 bg-white px-10 py-3 font-bold text-slate-800 hover:bg-gray-100 transition-colors shadow-md">
              WOMEN
            </button>
          </div>

          {/* SAĞ TARAF (Accessories ve Kids Üst Üste) */}
          <div className="flex flex-col gap-4 w-full lg:w-[30%] h-[400px] lg:h-full">
            
            {/* ACCESSORIES Kutusu (lg:h-auto silindi, min-h-0 eklendi) */}
            <div className="relative w-full flex-1 min-h-0 bg-gray-300 overflow-hidden">
               <img src="/Home/ACCESSORIES.png" alt="Accessories" className="w-full h-full object-cover" />
               <button className="absolute bottom-6 left-6 bg-white px-6 py-3 font-bold text-slate-800 hover:bg-gray-100 transition-colors shadow-md">
                 ACCESSORIES
               </button>
            </div>
            
            {/* KIDS Kutusu (min-h-0 eklendi) */}
            <div className="relative w-full flex-1 min-h-0 bg-gray-300 overflow-hidden">
               <img src="/Home/KIDS.png" alt="Kids" className="w-full h-full object-cover" />
               <button className="absolute bottom-6 left-6 bg-white px-6 py-3 font-bold text-slate-800 hover:bg-gray-100 transition-colors shadow-md">
                 KIDS
               </button>
            </div>
            
          </div>

        </div>
      </section>

      {/* 3. Bestseller Products Section */}
      <section className="flex flex-col items-center w-full max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">BESTSELLER PRODUCTS</h2>
        <p className="text-gray-500 mb-10 text-center">Problems trying to resolve the conflict between</p>
        
        <div className="flex flex-wrap justify-center w-full gap-y-10">
          {/* Örnek Ürün Kartları */}
          <ProductCard image="/Home/product1.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          <ProductCard image="/Home/product2.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          <ProductCard image="/Home/product3.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          <ProductCard image="/Home/product4.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          {/* Tasarımda 8 ürün var, istersen bu satırı kopyalayarak 8'e tamamlayabilirsin */}
          <ProductCard image="/Home/product5.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          <ProductCard image="/Home/product6.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          <ProductCard image="/Home/product7.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          <ProductCard image="/Home/product8.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
        </div>
      </section>

      {/* 4. Vita Classic Product Section (Yeşil Alan) */}
      <section className="w-full bg-[#23856D] flex justify-center pt-20 px-4 md:px-10 mt-20 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto w-full gap-10">
          {/* Yazı Kısmı */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left text-white w-full md:w-1/2 pb-20 md:pb-0 gap-6">
            <h4 className="text-xl">SUMMER 2020</h4>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Vita Classic Product</h1>
            <p className="text-sm md:text-base max-w-sm">We know how large objects will act, We know how are objects will act, We know</p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
              <span className="text-2xl font-bold hidden sm:block">$16.48</span>
              <button className="bg-[#2DC071] hover:bg-green-600 text-white font-bold py-3 px-8 rounded transition-colors w-full sm:w-auto">
                ADD TO CART
              </button>
            </div>
          </div>
          {/* Resim Kısmı (Mobilde altta) */}
          <div className="w-full md:w-1/2 flex justify-center items-end">
            <img src="/Home/vita.png" alt="Vita Classic Product" className="max-w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* 5. Part of the Neural Universe Section (Kırmızı Atkılı Çift) */}
      <section className="w-full flex justify-center py-20 px-4 md:px-10">
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto w-full gap-10">
          
          

          {/* Yazı Kısmı */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 gap-6">
            <h4 className="text-gray-400 font-bold tracking-widest text-sm">SUMMER 2020</h4>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">Part of the Neural Universe</h1>
            <p className="text-gray-500 max-w-sm">We know how large objects will act, but things on a small scale.</p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
              <button className="bg-[#23A6F0] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-colors w-full sm:w-auto">
  BUY NOW
</button>

<button className="bg-white border-2 border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white font-bold py-3 px-6 rounded transition-colors w-full sm:w-auto">
  READ MORE
</button>
            </div>
          </div>

          {/* Resim Kısmı */}
          <div className="w-full md:w-1/2 flex justify-center">
             <img src="/Home/atkı1.png" alt="Neural Universe" className="w-full h-auto object-cover" />
          </div>
        </div>
          
      </section>

      {/* 6. Featured Posts Section (Blog Kartları) */}
      <section className="w-full flex flex-col items-center py-20 px-4 max-w-7xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h6 className="text-[#23A6F0] font-bold mb-2 text-sm">Practice Advice</h6>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Posts</h2>
          <p className="text-gray-500 max-w-md mx-auto">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        </div>

        {/* Kartlar Konteyneri */}
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
          
          {/* Blog Kartı Örneği (Tasarımda 3 tane var, bunu kopyalayarak çoğaltabilirsin) */}
          <div className="flex flex-col bg-white shadow-md w-full md:w-1/3">
            <div className="relative w-full h-[300px] bg-gray-300">
               <img src="/Home/featured1.jpg" alt="Blog" className="w-full h-full object-cover" />
               <span className="absolute top-4 left-4 bg-[#E74040] text-white text-sm font-bold px-3 py-1 rounded shadow">NEW</span>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <div className="flex gap-4 text-xs text-gray-400">
                <span className="text-[#8EC2F2]">Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>
              <h4 className="text-xl font-bold text-slate-800 leading-snug">Loudest à la Madison #1 (L'integral)</h4>
              <p className="text-gray-500 text-sm">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
              <div className="flex justify-between items-center text-xs text-gray-500 font-semibold py-4 border-b border-gray-100">
                <div className="flex items-center gap-2"><span>🕒</span> 22 April 2021</div>
                <div className="flex items-center gap-2"><span>📈</span> 10 comments</div>
              </div>
              <a href="#" className="text-[#23A6F0] font-bold text-sm flex items-center gap-2 hover:text-blue-700 transition-colors w-max mt-2">
                Learn More <span className="text-lg">→</span>
              </a>
            </div>
          </div>
          {/* İstersen buraya 2 tane daha aynı kart yapısından ekle */}

          <div className="flex flex-col bg-white shadow-md w-full md:w-1/3">
            <div className="relative w-full h-[300px] bg-gray-300">
               <img src="/Home/featured2.jpg" alt="Blog" className="w-full h-full object-cover" />
               <span className="absolute top-4 left-4 bg-[#E74040] text-white text-sm font-bold px-3 py-1 rounded shadow">NEW</span>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <div className="flex gap-4 text-xs text-gray-400">
                <span className="text-[#8EC2F2]">Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>
              <h4 className="text-xl font-bold text-slate-800 leading-snug">Loudest à la Madison #1 (L'integral)</h4>
              <p className="text-gray-500 text-sm">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
              <div className="flex justify-between items-center text-xs text-gray-500 font-semibold py-4 border-b border-gray-100">
                <div className="flex items-center gap-2"><span>🕒</span> 22 April 2021</div>
                <div className="flex items-center gap-2"><span>📈</span> 10 comments</div>
              </div>
              <a href="#" className="text-[#23A6F0] font-bold text-sm flex items-center gap-2 hover:text-blue-700 transition-colors w-max mt-2">
                Learn More <span className="text-lg">→</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col bg-white shadow-md w-full md:w-1/3">
            <div className="relative w-full h-[300px] bg-gray-300">
               <img src="/Home/featured3.jpg" alt="Blog" className="w-full h-full object-cover" />
               <span className="absolute top-4 left-4 bg-[#E74040] text-white text-sm font-bold px-3 py-1 rounded shadow">NEW</span>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <div className="flex gap-4 text-xs text-gray-400">
                <span className="text-[#8EC2F2]">Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>
              <h4 className="text-xl font-bold text-slate-800 leading-snug">Loudest à la Madison #1 (L'integral)</h4>
              <p className="text-gray-500 text-sm">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
              <div className="flex justify-between items-center text-xs text-gray-500 font-semibold py-4 border-b border-gray-100">
                <div className="flex items-center gap-2"><span>🕒</span> 22 April 2021</div>
                <div className="flex items-center gap-2"><span>📈</span> 10 comments</div>
              </div>
              <a href="#" className="text-[#23A6F0] font-bold text-sm flex items-center gap-2 hover:text-blue-700 transition-colors w-max mt-2">
                Learn More <span className="text-lg">→</span>
              </a>
            </div>
          </div>

        </div>
      </section>
      
    </div>
  );
}