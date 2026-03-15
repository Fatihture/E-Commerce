import { ChevronRight, Star, Heart, ShoppingCart, Eye, ChevronLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage() {
  return (
    <div className="flex flex-col items-center w-full bg-gray-50">
      
      {/* 1. Breadcrumb */}
      <section className="w-full py-6">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm font-bold">
            <span className="text-slate-800">Home</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400">Shop</span>
          </div>
        </div>
      </section>

      {/* 2. Ürün Ana Bilgileri (Resimler ve Detaylar) */}
      <section className="w-full pb-12">
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 gap-8">
          
          {/* Sol Taraf: Görsel Galerisi */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            {/* Ana Büyük Görsel */}
            <div className="relative w-full h-[400px] md:h-[500px] bg-white overflow-hidden">
               <img src="/shop/product-9.png" alt="Product" className="w-full h-full object-cover" />
               <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200">
                 <ChevronLeft className="w-10 h-10" />
               </button>
               <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200">
                 <ChevronRight className="w-10 h-10" />
               </button>
            </div>
            {/* Küçük Resimler (Thumbnails) */}
            <div className="flex gap-4">
               <div className="w-24 h-24 bg-white cursor-pointer opacity-100 border-2 border-[#23A6F0]">
                 <img src="/shop/product-9.png" alt="Thumb 1" className="w-full h-full object-cover" />
               </div>
               <div className="w-24 h-24 bg-white cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                 <img src="/shop/product-4.png" alt="Thumb 2" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>

          {/* Sağ Taraf: Ürün Detayları */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 pt-4">
            <h2 className="text-2xl text-slate-800">Graphic Design</h2>
            
            {/* Yıldızlar ve Yorum Sayısı */}
            <div className="flex items-center gap-2">
              <div className="flex text-[#F3CD03]">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 text-gray-300" />
              </div>
              <span className="text-sm font-bold text-gray-500">10 Reviews</span>
            </div>

            {/* Fiyat ve Stok */}
            <h3 className="text-3xl font-bold text-slate-800 mt-2">$16.48</h3>
            <div className="flex gap-2 text-sm font-bold mt-1">
              <span className="text-gray-500">Availability  :</span>
              <span className="text-[#23A6F0]">In Stock</span>
            </div>

            {/* Açıklama Metni */}
            <p className="text-sm text-gray-500 mt-6 pb-6 border-b border-gray-300">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>

            {/* Renk Seçenekleri */}
            <div className="flex gap-2 mt-4">
              <div className="w-8 h-8 rounded-full bg-[#23A6F0] cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-[#2DC071] cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-[#E77C40] cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-[#252B42] cursor-pointer"></div>
            </div>

            {/* Butonlar */}
            <div className="flex items-center gap-4 mt-8">
              <button className="bg-[#23A6F0] text-white font-bold py-3 px-6 rounded text-sm hover:bg-blue-600 transition-colors">
                Select Options
              </button>
              <button className="p-3 bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                <Heart className="w-5 h-5 text-slate-800" />
              </button>
              <button className="p-3 bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                <ShoppingCart className="w-5 h-5 text-slate-800" />
              </button>
              <button className="p-3 bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                <Eye className="w-5 h-5 text-slate-800" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Sekmeler (Tabs) Alanı */}
      <section className="w-full bg-white hidden md:block">
        <div className="w-full max-w-7xl mx-auto border-b border-gray-200">
          <div className="flex justify-center gap-8 text-sm font-bold text-gray-500">
            <button className="py-6 hover:text-slate-800 transition-colors">Description</button>
            <button className="py-6 hover:text-slate-800 transition-colors">Additional Information</button>
            <button className="py-6 hover:text-slate-800 transition-colors">Reviews (0)</button>
          </div>
        </div>
      </section>

      {/* 4. Sekme İçeriği (Tab Content) */}
      <section className="w-full bg-white py-12">
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 gap-8">
          {/* Sol Görsel */}
          <div className="w-full md:w-1/3 bg-gray-100 h-[400px] overflow-hidden rounded">
             <img src="/shop/product-12.png" alt="Detail" className="w-full h-full object-cover" />
          </div>
          
          {/* Orta Metin Blokları */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-slate-800 mb-2">the quick fox jumps over</h3>
            <p className="text-sm text-gray-500">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
            <p className="text-sm text-gray-500">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
            <p className="text-sm text-gray-500">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
          </div>

          {/* Sağ Madde İmleri */}
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-slate-800 mb-2">the quick fox jumps over</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-bold"><ChevronRight className="w-4 h-4 text-gray-400"/> the quick fox jumps over the lazy dog</div>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-bold"><ChevronRight className="w-4 h-4 text-gray-400"/> the quick fox jumps over the lazy dog</div>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-bold"><ChevronRight className="w-4 h-4 text-gray-400"/> the quick fox jumps over the lazy dog</div>
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <h3 className="text-xl font-bold text-slate-800 mb-2">the quick fox jumps over</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-bold"><ChevronRight className="w-4 h-4 text-gray-400"/> the quick fox jumps over the lazy dog</div>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-bold"><ChevronRight className="w-4 h-4 text-gray-400"/> the quick fox jumps over the lazy dog</div>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-bold"><ChevronRight className="w-4 h-4 text-gray-400"/> the quick fox jumps over the lazy dog</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bestseller Products */}
      <section className="w-full bg-gray-50 py-12">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">BESTSELLER PRODUCTS</h3>
          <div className="w-full border-t border-gray-200 mb-8"></div>
          <div className="flex flex-wrap justify-center w-full gap-y-10">
            {/* Örnek 8 Ürün */}
            <ProductCard image="/shop/product-1.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" id={1} />
            <ProductCard image="/shop/product-2.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" id={2} />
            <ProductCard image="/shop/product-3.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" id={3} />
            <ProductCard image="/shop/product-4.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" id={4} />
            <ProductCard image="/shop/product-5.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" id={5} />
            <ProductCard image="/shop/product-6.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" id={6} />
            <ProductCard image="/shop/product-7.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" id={7} />
            <ProductCard image="/shop/product-8.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" id={8} />
          </div>
        </div>
      </section>

      {/* 6. Marka Logoları (Brands) - Shop Page ile Aynı */}
      <section className="w-full bg-gray-50 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto px-4 gap-8 md:gap-4">
          <img src="/shop/logo1.png" alt="Hooli" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="/shop/logo2.png" alt="Lyft" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="/shop/logo3.png" alt="Stripe" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="/shop/logo4.png" alt="AWS" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="/shop/logo5.png" alt="Reddit" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="/shop/logo6.png" alt="Pied Piper" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
        </div>
      </section>

    </div>
  );
}