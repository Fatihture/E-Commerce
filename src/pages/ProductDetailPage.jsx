import { useEffect, useState } from 'react'; // useState eklendi (resim seçimi için)
import { useParams, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loader2, ArrowLeft, Star, ShoppingCart, Heart, Eye, ChevronRight, Share2 } from 'lucide-react';
import { fetchProductDetail } from '../store/actions/productActions';
import ProductCard from '../components/ProductCard'; // Bestseller için

import { addToCart } from '../store/actions/shoppingCartActions';
import { toast } from 'react-toastify'; // Kullanıcıya eklendiğini bildirmek için şık bir popup

export default function ProductDetailPage() {
  const { productId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  // Redux'tan verileri ve Bestseller için tüm listeyi alıyoruz
  const { currentProduct, detailFetchState, productList, categories } = useSelector(state => state.product);
  
  // Sol taraftaki ana resmi kontrol etmek için state
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchProductDetail(productId));
    // Sayfa değişince her zaman en üste kaydır
    window.scrollTo(0, 0);
  }, [dispatch, productId]);

  // Ürün yüklendiğinde ana resmi ilk resme ayarla
  useEffect(() => {
    if (currentProduct) {
      setSelectedImageIndex(0);
    }
  }, [currentProduct]);

  // --- SPINNER ---
  if (detailFetchState === 'FETCHING') {
    return (
      <div className="flex flex-col justify-center items-center w-full min-h-[60vh] gap-4">
        <Loader2 className="w-16 h-16 animate-spin text-[#23A6F0]" />
        <p className="text-gray-500 font-bold text-lg">Loading Product...</p>
      </div>
    );
  }

  // --- HATA DURUMU (Öncekinden daha detaylı hata kontrolü) ---
  // Eğer fetch bittiyse (FETCHED) ama hala currentProduct NULL ise, o zaman "bulunamadı" deriz.
  if ((detailFetchState === 'FETCHED' && !currentProduct) || detailFetchState === 'FAILED') {
    return (
      <div className="flex flex-col justify-center items-center w-full min-h-[60vh] gap-4 text-center px-4 py-20">
        <img src="/error-404.png" alt="Error" className="w-32 h-auto opacity-50 mb-4" /> {/* Fallback resim */}
        <p className="text-slate-800 font-bold text-2xl">Opps! Ürün bulunamadı.</p>
        <p className="text-gray-500 max-w-sm">Aradığınız ürün veritabanımızda mevcut değil veya bir hata oluştu.</p>
        <button onClick={() => history.goBack()} className="mt-4 flex items-center gap-2 bg-[#23A6F0] text-white font-bold py-3 px-6 rounded hover:bg-blue-600 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Alışverişe Geri Dön
        </button>
      </div>
    );
  }

  // Eğer veri henüz çekilmediyse (NOT_FETCHED) bir şey gösterme (ya da spinner göster)
  if (detailFetchState === 'NOT_FETCHED') return null;

  // --- BESTSELLER PRODUCTS MATEMATİĞİ (Görseldeki alt kısım için) ---
  // Mevcut ürünle aynı kategorideki en yüksek puanlı 8 ürünü al
  const bestsellerProducts = productList
    ?.filter(p => p.category_id === currentProduct.category_id && p.id !== currentProduct.id)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8) || [];

  return (
    <div className="w-full bg-gray-50">
      
      {/* 1. BREADCRUMB (Üstteki Home > Shop yolu) */}
      <div className="bg-white py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm font-bold">
          <Link to="/" className="text-slate-800 hover:text-blue-500">Home</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link to="/shop" className="text-gray-400 hover:text-slate-800 transition-colors">Shop</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        
        {/* Görseldeki gibi "Geri Dön" butonunu daha şık yapalım */}
        <button 
          onClick={() => history.goBack()} 
          className="flex items-center gap-2 text-slate-800 font-bold hover:text-blue-600 transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {/* 2. ANA ÜRÜN KARTI (Görseldeki format) */}
        <div className="flex flex-col md:flex-row gap-10 bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
          
          {/* SOL: Resim Galeri Alanı */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="w-full h-auto aspect-[4/3] overflow-hidden rounded-md shadow-inner border border-gray-100">
              {/* ANA RESİM (Seçilen) */}
              <img 
                src={currentProduct.images?.[selectedImageIndex]?.url || "/shop/product-1.png"} 
                alt={currentProduct.name} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* KÜÇÜK RESİMLER (Thumbnails) */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {currentProduct.images?.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-24 h-24 rounded border-2 transition-colors flex-shrink-0 ${
                    selectedImageIndex === index ? 'border-[#23A6F0]' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={img.url} alt={`Thumb ${index}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* SAĞ: Bilgi ve İşlem Alanı (Görseldeki format) */}
          <div className="w-full md:w-1/2 flex flex-col justify-start gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">{currentProduct.name}</h1>
            
            {/* Rating ve Reviews */}
            <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
              <div className="flex text-yellow-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.round(currentProduct.rating) ? 'fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-500">({currentProduct.sell_count} Reviews)</span>
            </div>

            <h2 className="text-3xl font-bold text-slate-800">${currentProduct.price.toFixed(2)}</h2>
            
            <div className="flex items-center gap-2 text-sm font-bold mt-2">
              <span className="text-gray-500">Availability :</span>
              {currentProduct.stock > 0 ? (
                <span className="text-[#23A6F0]">In Stock</span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </div>

            <p className="text-gray-500 text-sm leading-relaxed border-b border-gray-100 pb-6">
              {currentProduct.description}
            </p>

            {/* RENK SEÇENEKLERİ (Görseldeki gibi yuvarlaklar) */}
            <div className="flex flex-col gap-3 mt-2 border-b border-gray-100 pb-6">
              <h4 className="text-sm font-bold text-slate-800">Colors:</h4>
              <div className="flex items-center gap-3">
                {/* Bu renk verisi API'den gelmediği için şimdilik sabit koyuyoruz */}
                <button className="w-8 h-8 rounded-full bg-[#23A6F0] border-2 border-white ring-1 ring-gray-200 hover:ring-2 hover:ring-[#23A6F0]"></button>
                <button className="w-8 h-8 rounded-full bg-[#2DC071] border-2 border-white ring-1 ring-gray-200 hover:ring-2 hover:ring-[#2DC071]"></button>
                <button className="w-8 h-8 rounded-full bg-[#E77C40] border-2 border-white ring-1 ring-gray-200 hover:ring-2 hover:ring-[#E77C40]"></button>
                <button className="w-8 h-8 rounded-full bg-[#252B42] border-2 border-white ring-1 ring-gray-200 hover:ring-2 hover:ring-[#252B42]"></button>
              </div>
            </div>

            {/* İŞLEM BUTONLARI (Görseldeki format) */}
            <div className="flex items-center gap-4 mt-6">
              <button className="bg-[#23A6F0] text-white font-bold py-3.5 px-8 rounded text-sm hover:bg-blue-600 transition-colors uppercase tracking-wider">
                Select Options
              </button>
              <div className="flex items-center gap-3">
                <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-100 text-slate-800">
                  <Heart className="w-5 h-5" />
                </button>
                {/* SEPETE EKLE BUTONU */}
              <button 
                onClick={() => {
                  dispatch(addToCart(currentProduct));
                  toast.success(`${currentProduct.name} sepete eklendi!`, { autoClose: 1500 });
                }}
                className="p-3 border border-gray-200 rounded-full hover:bg-[#23A6F0] hover:text-white transition-colors text-slate-800"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
                <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-100 text-slate-800">
                  <Eye className="w-5 h-5" />
                </button>
                <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-100 text-slate-800">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>


        {/* --- YENİ EKLENEN: AÇIKLAMA VE BİLGİ SEKMELERİ (Figma Tasarımı) --- */}
        <div className="hidden md:block mt-12 mb-12">
          
          {/* Sekmeler (Tabs) */}
          <div className="flex justify-center items-center gap-10 border-b border-gray-200 pb-4 text-sm font-bold text-gray-500">
            <button className="text-slate-800 underline underline-offset-8 decoration-2 cursor-pointer">Description</button>
            <button className="hover:text-slate-800 transition-colors cursor-pointer">Additional Information</button>
            <button className="hover:text-slate-800 transition-colors cursor-pointer">Reviews (0)</button>
          </div>

          {/* İçerik Alanı */}
          <div className="flex flex-col md:flex-row gap-8 pt-8 shadow-sm bg-white p-8 rounded-b-lg border border-t-0 border-gray-100">
            
            {/* Sol: Resim */}
            <div className="w-full md:w-1/3 h-[350px] rounded-md overflow-hidden shadow-sm border border-gray-100">
              <img 
                src={currentProduct.images?.[0]?.url || "/shop/product-1.png"} 
                alt="Detail Tab" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Orta: Metin Paragrafları */}
            <div className="w-full md:w-1/3 flex flex-col gap-5">
              <h3 className="text-xl font-bold text-slate-800">the quick fox jumps over</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {currentProduct.description} {/* API'den gelen gerçek açıklama */}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>

            {/* Sağ: Listeler */}
            <div className="w-full md:w-1/3 flex flex-col gap-6">
              
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-slate-800">the quick fox jumps over</h3>
                <div className="flex flex-col gap-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-500 font-bold">
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                      <span>the quick fox jumps over the lazy dog</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-slate-800">the quick fox jumps over</h3>
                <div className="flex flex-col gap-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-500 font-bold">
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                      <span>the quick fox jumps over the lazy dog</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------- */}

        {/* 3. BESTSELLER PRODUCTS SECTION (Görseldeki alt kısım) */}
        {bestsellerProducts.length > 0 && (
          <section className="w-full py-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-10 pb-4 border-b border-gray-100">BESTSELLER PRODUCTS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
              {bestsellerProducts.map(product => {
                // Rota oluşturma matematiği
                const cat = categories?.find(c => c.id === product.category_id);
                const genderText = cat?.gender === 'k' ? 'kadin' : cat?.gender === 'e' ? 'erkek' : 'diger';
                const catName = cat?.code?.split(':')[1] || 'kategori';
                const slug = product.name.toLowerCase().replace(/[^a-z0-9\u011F\u011E\u0131\u0130\u00F6\u00D6\u00E7\u00C7\u015F\u015E\u00FC\u00DC]+/g, '-').replace(/(^-|-$)+/g, '');
                const detailUrl = `/shop/${genderText}/${catName}/${product.category_id}/${slug}/${product.id}`;

                return (
                  <Link 
                    key={product.id} 
                    to={detailUrl} 
                    className="cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg group"
                  >
                    <ProductCard 
                      image={product.images?.[0]?.url || "/shop/product-1.png"} 
                      title={product.name} 
                      department={product.description} 
                      oldPrice={`$${(product.price * 1.2).toFixed(2)}`} 
                      newPrice={`$${product.price.toFixed(2)}`} 
                    />
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto px-4 gap-8 md:gap-4 mt-16">
          <img src="/shop/logo1.png" alt="Hooli" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="/shop/logo2.png" alt="Lyft" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="/shop/logo3.png" alt="Stripe" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="/shop/logo4.png" alt="AWS" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="/shop/logo5.png" alt="Reddit" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <img src="/shop/logo6.png" alt="Pied Piper" className="w-24 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
        </div>
          </section>
        )}

      </div>
    </div>
  );
}