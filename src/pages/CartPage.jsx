import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ChevronRight } from 'lucide-react';
import { 
  removeFromCart, 
  updateCartItemCount, 
  toggleCartItemCheck 
} from '../store/actions/shoppingCartActions';

export default function CartPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector(state => state.shoppingCart.cart);

  // --- MATEMATİKSEL HESAPLAMALAR ---
  // 1. Sadece seçili (checked) ürünlerin toplamını bul
  const cartTotal = cart
    .filter(item => item.checked)
    .reduce((total, item) => total + (item.product.price * item.count), 0);

  // Toplam ürün sayısı (Sadece seçililer değil, hepsi)
  const totalItemsCount = cart.reduce((count, item) => count + item.count, 0);

  // 2. Kargo ve İndirim Mantığı (Örn: Sabit kargo 29.99, 150 üzeri bedava)
  const shippingCost = 29.99;
  const isFreeShipping = cartTotal >= 150 && cartTotal > 0;
  const shippingDiscount = isFreeShipping ? shippingCost : 0;
  
  // 3. Genel Toplam (Grand Total)
  const grandTotal = cartTotal > 0 ? (cartTotal + shippingCost - shippingDiscount) : 0;
  // ---------------------------------

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] bg-gray-50 gap-4">
        <h2 className="text-2xl font-bold text-slate-800">Sepetiniz şu an boş.</h2>
        <p className="text-gray-500">Alışverişe başlamak için ürünlerimize göz atın.</p>
        <button onClick={() => history.push('/shop')} className="bg-[#F27A1A] text-white font-bold py-3 px-8 rounded mt-2 hover:bg-orange-600 transition-colors">
          Alışverişe Başla
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
        
        {/* SOL TARAF: Sepetteki Ürünler Listesi (Aynı kalıyor) */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Sepetim ({totalItemsCount} Ürün)</h2>
          
          {cart.map((item) => (
            <div key={item.product.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              
              <input 
                type="checkbox" 
                checked={item.checked}
                onChange={() => dispatch(toggleCartItemCheck(item.product.id))}
                className="w-5 h-5 text-[#F27A1A] rounded border-gray-300 focus:ring-[#F27A1A] cursor-pointer mt-1 sm:mt-0"
              />

              <img 
                src={item.product.images?.[0]?.url || "/shop/product-1.png"} 
                alt={item.product.name} 
                className="w-20 h-24 object-cover rounded border border-gray-100"
              />

              <div className="flex-1 flex flex-col">
                <Link to={`/shop/kategori/isim/1/isim/${item.product.id}`} className="text-slate-800 font-bold hover:text-blue-500 line-clamp-2">
                  {item.product.name}
                </Link>
                <span className="text-sm text-gray-500 mt-1">Kargo Bedava!</span>
              </div>

              <div className="flex items-center border border-gray-300 rounded overflow-hidden h-10 w-28">
                <button 
                  onClick={() => dispatch(updateCartItemCount(item.product.id, item.count - 1))}
                  disabled={item.count <= 1}
                  className="w-1/3 flex justify-center items-center bg-gray-50 hover:bg-gray-100 disabled:opacity-50 text-slate-800 transition-colors h-full"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="w-1/3 flex justify-center items-center font-bold text-sm h-full border-x border-gray-300">
                  {item.count}
                </div>
                <button 
                  onClick={() => dispatch(updateCartItemCount(item.product.id, item.count + 1))}
                  className="w-1/3 flex justify-center items-center bg-gray-50 hover:bg-gray-100 text-slate-800 transition-colors h-full"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-6 mt-4 sm:mt-0 w-full sm:w-auto justify-between sm:justify-end">
                <span className="text-[#F27A1A] font-bold text-lg whitespace-nowrap">
                  ${(item.product.price * item.count).toFixed(2)}
                </span>
                <button 
                  onClick={() => dispatch(removeFromCart(item.product.id))}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  title="Ürünü Sil"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- SAĞ TARAF: SİPARİŞ ÖZETİ KUTUSU (Görseldeki Tasarım) --- */}
        <div className="w-full lg:w-[320px] flex flex-col gap-4 sticky top-24 h-max">
          
          {/* Üstteki Turuncu Buton */}
          <Link 
  to="/create-order" 
  className="w-full bg-[#F27A1A] text-white font-bold py-3.5 rounded hover:bg-orange-600 transition-colors flex justify-center items-center gap-2"
>
  Sepeti Onayla <ChevronRight className="w-5 h-5" />
</Link>

          {/* Sipariş Özeti Beyaz Kutu */}
          <div className="bg-white p-5 rounded shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Sipariş Özeti</h3>
            
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-600 text-sm">Ürünün Toplamı</span>
              <span className="font-bold text-slate-800">${cartTotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-600 text-sm">Kargo Toplam</span>
              <span className="font-bold text-slate-800">${shippingCost.toFixed(2)}</span>
            </div>

            {/* İndirim Varsa Göster */}
            {isFreeShipping && (
              <div className="flex justify-between items-start mb-4 text-[#F27A1A]">
                <span className="text-sm max-w-[160px] leading-tight">150 $ ve Üzeri Kargo Bedava (Satıcı Karşılar)</span>
                <span className="font-bold">-${shippingDiscount.toFixed(2)}</span>
              </div>
            )}

            <hr className="my-4 border-gray-200" />

            {/* Genel Toplam */}
            <div className="flex justify-between items-center mb-5">
              <span className="font-bold text-gray-800">Toplam</span>
              <span className="text-[#F27A1A] font-bold text-xl">${grandTotal.toFixed(2)}</span>
            </div>

            {/* İndirim Kodu Butonu */}
            <button className="w-full bg-white text-gray-500 border border-gray-300 font-bold py-2.5 rounded text-sm hover:bg-gray-50 transition-colors flex justify-center items-center">
              <Plus className="w-4 h-4 mr-1" /> İNDİRİM KODU GİR
            </button>
          </div>

          {/* Alttaki Turuncu Buton */}
          <Link 
            to="/create-order" 
             className="w-full bg-[#F27A1A] text-white font-bold py-3.5 rounded hover:bg-orange-600 transition-colors flex justify-center items-center gap-2"
          >
             Sepeti Onayla <ChevronRight className="w-5 h-5" />
            </Link>
          
        </div>

      </div>
    </div>
  );
}