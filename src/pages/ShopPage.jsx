import { useEffect, useState } from 'react'; // useState EKLENDİ
import { ChevronRight, Grid, List, ChevronDown, Loader2 } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

import { fetchProducts, setOffset } from '../store/actions/productActions'; 

export default function ShopPage() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const { categories, productList, fetchState, total, limit, offset } = useSelector(state => state.product);

  // --- YENİ: FİLTRELEME VE SIRALAMA STATE'LERİ ---
  const [filterText, setFilterText] = useState(''); // Input'a yazılan yazı
  const [sortOption, setSortOption] = useState(''); // Select'ten seçilen değer
  
  // "Filter" butonuna basıldığında API'ye gidecek kesinleşmiş değerler
  const [appliedFilter, setAppliedFilter] = useState('');
  const [appliedSort, setAppliedSort] = useState('');

  // 1. Kategori değiştiğinde her şeyi sıfırla ve ilk sayfaya dön!
  useEffect(() => {
    setFilterText('');
    setSortOption('');
    setAppliedFilter('');
    setAppliedSort('');
    dispatch(setOffset(0));
  }, [categoryId, dispatch]);

  // 2. Sayfa, Kategori, veya Uygulanan Filtreler değiştiğinde ÜRÜNLERİ ÇEK!
  useEffect(() => {
    // Thunk'a sırasıyla: Kategori, Filtre Yazısı ve Sıralama Tipini gönderiyoruz
    dispatch(fetchProducts(categoryId, appliedFilter, appliedSort));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [dispatch, categoryId, offset, appliedFilter, appliedSort]);

  // 3. "Filter" Butonuna Basıldığında Çalışacak Fonksiyon
  const handleFilterClick = () => {
    setAppliedFilter(filterText);
    setAppliedSort(sortOption);
    dispatch(setOffset(0)); // Filtreleme yapılınca sayfa sayısını 1'e sıfırlamak ZORUNLUDUR!
  };
  // ----------------------------------------------

  const topCategories = categories ? [...categories].sort((a, b) => b.rating - a.rating).slice(0, 5) : [];

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit) || 1;

  let pages = [];
  for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
      pages.push(i);
  }

  return (
    <div className="flex flex-col items-center w-full">
      {/* BAŞLIK */}
      <section className="w-full bg-gray-50 py-6">
         {/* ... (Başlık kodu aynı) ... */}
         <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto px-4 gap-4">
          <h2 className="text-2xl font-bold text-slate-800">Shop</h2>
          <div className="flex items-center gap-2 text-sm font-bold">
            <span className="text-slate-800">Home</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400">Shop</span>
          </div>
        </div>
      </section>

      {/* KATEGORİ KARTLARI */}
      <section className="w-full bg-gray-50 pb-12">
        {/* ... (Kategori kartları kodu aynı) ... */}
        <div className="flex flex-col md:flex-row justify-center w-full max-w-7xl mx-auto px-4 gap-4">
          {topCategories.map(cat => {
            const genderText = cat.gender === 'k' ? 'kadin' : 'erkek';
            const catName = cat.code.split(':')[1];
            return (
              <Link key={cat.id} to={`/shop/${genderText}/${catName}/${cat.id}`} className="relative w-full md:w-1/5 h-[300px] md:h-[250px] overflow-hidden group cursor-pointer">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white transition-colors group-hover:bg-black/50 text-center px-2">
                  <h3 className="font-bold text-xl uppercase tracking-wider">
                    {cat.gender === 'k' ? 'KADIN ' : 'ERKEK '}{cat.title}
                  </h3>
                  <p className="text-sm mt-1">Rating: {cat.rating}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* --- YENİ FİLTRELEME VE SIRALAMA ALANI --- */}
      <section className="w-full bg-white py-6">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto px-4 gap-6">
          <p className="text-sm font-bold text-gray-500 w-full md:w-auto text-center md:text-left">
            Showing all {total} results
          </p>
          
          <div className="flex items-center gap-4 justify-center w-full md:w-auto">
            <span className="text-sm font-bold text-gray-500">Views:</span>
            <button className="p-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
              <Grid className="w-4 h-4 text-slate-800" />
            </button>
            <button className="p-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
              <List className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Arama, Dropdown ve Filter Butonu */}
          <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
            
            {/* 1. Arama Kutusu (Filter) */}
            <input 
              type="text" 
              placeholder="Search..." 
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="border border-gray-300 bg-gray-50 text-slate-800 py-3 px-4 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-full md:w-auto"
            />

            {/* 2. Sıralama Dropdown (Sort) */}
            <div className="relative w-full md:w-auto">
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full appearance-none border border-gray-300 bg-gray-50 text-slate-800 py-3 pl-4 pr-10 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Sort by</option>
                <option value="price:asc">Price: Low to High</option>
                <option value="price:desc">Price: High to Low</option>
                <option value="rating:asc">Rating: Low to High</option>
                <option value="rating:desc">Rating: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            {/* 3. Filter Butonu */}
            <button 
              onClick={handleFilterClick}
              className="bg-[#23A6F0] text-white font-bold py-3 px-6 rounded text-sm hover:bg-blue-600 transition-colors w-full md:w-auto"
            >
              Filter
            </button>
          </div>

        </div>
      </section>
      {/* ------------------------------------------ */}

      {/* ÜRÜN LİSTESİ VE SPINNER */}
      <section className="w-full bg-white py-12">
        {fetchState === 'FETCHING' ? (
          <div className="flex flex-col justify-center items-center w-full py-20 gap-4">
            <Loader2 className="w-12 h-12 animate-spin text-[#23A6F0]" />
            <p className="text-gray-500 font-bold">Products are loading...</p>
          </div>
        ) : fetchState === 'FAILED' ? (
          <div className="flex justify-center w-full py-20">
            <p className="text-red-500 font-bold">Failed to load products. Please try again.</p>
          </div>
        ) : productList?.length === 0 ? (
          // YENİ EKLENDİ: EĞER KATEGORİNİN İÇİ BOŞSA BU ÇALIŞACAK
          <div className="flex flex-col items-center justify-center w-full py-20 gap-2">
            <h3 className="text-2xl font-bold text-slate-800">No products found!</h3>
            <p className="text-gray-500">There are no products in this category yet.</p>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center w-full max-w-7xl mx-auto px-4 gap-y-10 gap-x-6">
            {productList?.map(product => (
              <ProductCard 
                key={product.id}
                image={product.images?.[0]?.url || "/shop/product-1.png"} 
                title={product.name} 
                department={product.description} 
                oldPrice={`$${(product.price * 1.2).toFixed(2)}`} 
                newPrice={`$${product.price.toFixed(2)}`} 
              />
            ))}
          </div>
        )}
      </section>

      {/* DİNAMİK SAYFALAMA BÖLÜMÜ */}
      <section className="w-full bg-white pb-12">
        {/* ... (Sayfalama kodu aynı) ... */}
        <div className="flex justify-center">
          <div className="flex border border-gray-300 rounded shadow-sm">
            <button onClick={() => dispatch(setOffset(0))} disabled={currentPage === 1} className="px-6 py-4 bg-gray-100 text-gray-400 font-bold border-r border-gray-300 hover:bg-gray-200 transition-colors rounded-l disabled:opacity-50 disabled:cursor-not-allowed">First</button>
            {pages.map(page => (
              <button key={page} onClick={() => dispatch(setOffset((page - 1) * limit))} className={`px-5 py-4 font-bold border-r border-gray-300 transition-colors ${currentPage === page ? 'bg-[#23A6F0] text-white' : 'bg-white text-blue-500 hover:bg-gray-50'}`}>{page}</button>
            ))}
            <button onClick={() => dispatch(setOffset(currentPage * limit))} disabled={currentPage === totalPages} className="px-6 py-4 bg-white text-blue-500 font-bold hover:bg-gray-50 transition-colors rounded-r disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
          </div>
        </div>
      </section>

      {/* MARKALAR */}
      <section className="w-full bg-gray-50 py-12">
        {/* ... (Markalar kodu aynı) ... */}
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