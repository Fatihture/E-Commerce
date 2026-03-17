import { ChevronRight, Grid, List, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function ShopPage() {
  return (
    <div className="flex flex-col items-center w-full">
      
      {/*  Başlık  */}
      <section className="w-full bg-gray-50 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto px-4 gap-4">
          <h2 className="text-2xl font-bold text-slate-800">Shop</h2>
          <div className="flex items-center gap-2 text-sm font-bold">
            <span className="text-slate-800">Home</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400">Shop</span>
          </div>
        </div>
      </section>

      {/* Kategori Kartları  */}
      <section className="w-full bg-gray-50 pb-12">
        <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl mx-auto px-4 gap-4">
          <div className="relative w-full md:w-1/5 h-[300px] md:h-[250px] overflow-hidden group cursor-pointer">
            <img src="/shop/category1.png" alt="Category 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 flex flex-col justify-center items-center text-white transition-colors group-hover:bg-black/50">
              
            </div>
          </div>
          <div className="relative w-full md:w-1/5 h-[300px] md:h-[250px] overflow-hidden group cursor-pointer">
            <img src="/shop/category2.png" alt="Category 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 flex flex-col justify-center items-center text-white transition-colors group-hover:bg-black/50">

            </div>
          </div>
          <div className="relative w-full md:w-1/5 h-[300px] md:h-[250px] overflow-hidden group cursor-pointer">
            <img src="/shop/category3.png" alt="Category 3" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 flex flex-col justify-center items-center text-white transition-colors group-hover:bg-black/50">

            </div>
          </div>
          <div className="relative w-full md:w-1/5 h-[300px] md:h-[250px] overflow-hidden group cursor-pointer">
            <img src="/shop/category4.png" alt="Category 4" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 flex flex-col justify-center items-center text-white transition-colors group-hover:bg-black/50">

            </div>
          </div>
          <div className="relative w-full md:w-1/5 h-[300px] md:h-[250px] overflow-hidden group cursor-pointer">
            <img src="/shop/category5.png" alt="Category 5" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 flex flex-col justify-center items-center text-white transition-colors group-hover:bg-black/50">

            </div>
          </div>
        </div>
      </section>

      {/*  Filtreleme ve Sıralama*/}
      <section className="w-full bg-white py-6">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto px-4 gap-6">
          <p className="text-sm font-bold text-gray-500">Showing all 12 results</p>
          
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-gray-500">Views:</span>
            <button className="p-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
              <Grid className="w-4 h-4 text-slate-800" />
            </button>
            <button className="p-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
              <List className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <select className="w-full appearance-none border border-gray-300 bg-gray-50 text-gray-500 py-3 pl-4 pr-10 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
            <button className="bg-[#23A6F0] text-white font-bold py-3 px-6 rounded text-sm hover:bg-blue-600 transition-colors">
              Filter
            </button>
          </div>
        </div>
      </section>

      {/*  Ürün Listesi */}
      <section className="w-full bg-white py-12">
        <div className="flex flex-wrap justify-center w-full max-w-7xl mx-auto px-4 gap-y-10">
          <ProductCard image="/shop/product-1.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          <ProductCard image="/shop/product-2.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          <ProductCard image="/shop/product-3.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          <ProductCard image="/shop/product-4.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          <ProductCard image="/shop/product-5.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          <ProductCard image="/shop/product-6.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          <ProductCard image="/shop/product-7.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          <ProductCard image="/shop/product-8.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
            <ProductCard image="/shop/product-9.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          <ProductCard image="/shop/product-10.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          <ProductCard image="/shop/product-11.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
          <ProductCard image="/shop/product-12.png" title="Graphic Design" department="English Department" oldPrice="$16.48" newPrice="$6.48" />
        </div>
      </section>

      {/*  Sayfalama*/}
      <section className="w-full bg-white pb-12">
        <div className="flex justify-center">
          <div className="flex border border-gray-300 rounded shadow-sm">
            <button className="px-6 py-4 bg-gray-100 text-gray-400 font-bold border-r border-gray-300 hover:bg-gray-200 transition-colors rounded-l">First</button>
            <button className="px-5 py-4 bg-white text-blue-500 font-bold border-r border-gray-300 hover:bg-gray-50 transition-colors">1</button>
            <button className="px-5 py-4 bg-[#23A6F0] text-white font-bold border-r border-gray-300">2</button>
            <button className="px-5 py-4 bg-white text-blue-500 font-bold border-r border-gray-300 hover:bg-gray-50 transition-colors">3</button>
            <button className="px-6 py-4 bg-white text-blue-500 font-bold hover:bg-gray-50 transition-colors rounded-r">Next</button>
          </div>
        </div>
      </section>

      {/*  Marka */}
      <section className="w-full bg-gray-50 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto px-4 gap-8 md:gap-4">
          <img src="shop/logo1.png" alt="Hooli" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="shop/logo2.png" alt="Lyft" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="shop/logo3.png" alt="Stripe" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="shop/logo4.png" alt="AWS" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="shop/logo5.png" alt="Reddit" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="shop/logo6.png" alt="Pied Piper" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
        </div>
      </section>

    </div>
  );
}