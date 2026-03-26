import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Plus, Edit, Trash2, CreditCard } from 'lucide-react';
import { fetchAddresses, addAddress, updateAddress, deleteAddress, fetchCards, addCard, updateCard, deleteCard } from '../store/actions/clientActions';

const cities = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya"];
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const years = Array.from({ length: 15 }, (_, i) => new Date().getFullYear() + i);

export default function CreateOrderPage() {
  const dispatch = useDispatch();
  
  // REDUX STATELERİ
  const addressList = useSelector(state => state.client.addressList || []);
  const creditCards = useSelector(state => state.client.creditCards || []);
  const cart = useSelector(state => state.shoppingCart.cart || []);

  // LOKAL STATELER (Sekmeler ve Modallar)
  const [activeTab, setActiveTab] = useState('address'); // 'address' veya 'payment'
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false); // Mesafeli Satış Sözleşmesi
  
  // Adres Formu State'leri
  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  // Kart Formu State'leri
  const [isCardFormOpen, setIsCardFormOpen] = useState(false);
  const [editingCard, setEditingCard] = useState(null);

  // Form Hook'ları (İkisi karışmasın diye isimlerini ayırdık)
  const { register: regAddress, handleSubmit: handleAddressSubmit, reset: resetAddress, setValue: setAddressValue } = useForm();
  const { register: regCard, handleSubmit: handleCardSubmit, reset: resetCard, setValue: setCardValue } = useForm();

  // Sipariş Özeti Matematiği
  const cartTotal = cart.filter(item => item.checked).reduce((total, item) => total + (item.product.price * item.count), 0);
  const shippingCost = 29.99;
  const isFreeShipping = cartTotal >= 150 && cartTotal > 0;
  const shippingDiscount = isFreeShipping ? shippingCost : 0;
  const grandTotal = cartTotal > 0 ? (cartTotal + shippingCost - shippingDiscount) : 0;

  useEffect(() => {
    dispatch(fetchAddresses());
    dispatch(fetchCards()); // Kartları da çekiyoruz
  }, [dispatch]);

  // --- ADRES İŞLEMLERİ ---
  const openAddressForm = (address = null) => {
    setEditingAddress(address);
    if (address) {
      Object.keys(address).forEach(key => setAddressValue(key, address[key]));
    } else {
      resetAddress({ title: '', name: '', surname: '', phone: '', city: '', district: '', neighborhood: '' });
    }
    setIsAddressFormOpen(true);
  };

  const onAddressSubmit = (data) => {
    editingAddress ? dispatch(updateAddress({ ...data, id: editingAddress.id })) : dispatch(addAddress(data));
    setIsAddressFormOpen(false);
  };

  // --- KART İŞLEMLERİ ---
  const openCardForm = (card = null) => {
    setEditingCard(card);
    if (card) {
      setCardValue('name_on_card', card.name_on_card);
      setCardValue('card_no', card.card_no);
      setCardValue('expire_month', card.expire_month);
      setCardValue('expire_year', card.expire_year);
    } else {
      resetCard({ name_on_card: '', card_no: '', expire_month: '', expire_year: '' });
    }
    setIsCardFormOpen(true);
  };

  const onCardSubmit = (data) => {
    // API payload tipine uyduruyoruz (Aylar ve yıllar integer olmalı)
    const payload = {
      ...data,
      expire_month: parseInt(data.expire_month),
      expire_year: parseInt(data.expire_year)
    };
    editingCard ? dispatch(updateCard({ ...payload, id: editingCard.id })) : dispatch(addCard(payload));
    setIsCardFormOpen(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* ÜST SEKMELER (Görseldeki gibi) */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('address')}
            className={`flex-1 py-4 px-6 text-lg font-bold rounded shadow-sm border-b-4 transition-colors ${activeTab === 'address' ? 'bg-white border-[#F27A1A] text-[#F27A1A]' : 'bg-gray-200 border-transparent text-gray-500 hover:bg-white'}`}
          >
            Adres Bilgileri
          </button>
          <button 
            onClick={() => {
              if (selectedAddressId) setActiveTab('payment');
              else alert("Lütfen önce bir adres seçin!");
            }}
            className={`flex-1 py-4 px-6 text-lg font-bold rounded shadow-sm border-b-4 transition-colors ${activeTab === 'payment' ? 'bg-white border-[#F27A1A] text-[#F27A1A]' : 'bg-gray-200 border-transparent text-gray-500 hover:bg-white'}`}
          >
            Ödeme Seçenekleri
            <span className="block text-xs font-normal text-gray-400 mt-1">Banka/Kredi Kartı ile güvenle ödeyin.</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* SOL TARAF: İÇERİK (Sekmeye Göre Değişir) */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* ---------------- ADRES SEKMESİ ---------------- */}
            {activeTab === 'address' && (
              <>
                <div className="bg-white p-6 rounded shadow-sm border border-gray-200 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-50 transition-colors h-24" onClick={() => openAddressForm()}>
                  <Plus className="w-6 h-6 text-[#F27A1A] mb-1" />
                  <span className="font-bold text-[#F27A1A]">Yeni Adres Ekle</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {addressList.map(address => (
                    <div 
                      key={address.id} 
                      className={`p-4 rounded border-2 cursor-pointer transition-all ${selectedAddressId === address.id ? 'border-[#F27A1A] bg-orange-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                      onClick={() => setSelectedAddressId(address.id)}
                    >
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                        <div className="flex items-center gap-2">
                          <input type="radio" checked={selectedAddressId === address.id} readOnly className="text-[#F27A1A] focus:ring-[#F27A1A]" />
                          <h4 className="font-bold text-slate-800">{address.title}</h4>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={(e) => { e.stopPropagation(); openAddressForm(address); }} className="text-gray-400 hover:text-[#F27A1A]"><Edit className="w-4 h-4"/></button>
                          <button onClick={(e) => { e.stopPropagation(); dispatch(deleteAddress(address.id)); }} className="text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4"/></button>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 flex flex-col gap-1">
                        <p className="font-bold text-slate-800">{address.name} {address.surname}</p>
                        <p>{address.phone}</p>
                        <p className="line-clamp-2 mt-1">{address.neighborhood}</p>
                        <p>{address.district} / {address.city}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ---------------- ÖDEME SEKMESİ (Görseldeki Tasarım) ---------------- */}
            {activeTab === 'payment' && (
              <div className="bg-white rounded shadow-sm border border-gray-200 p-6">
                
                {/* Üst Kısım: Kart ile Öde Başlığı */}
                <div className="flex items-center gap-3 border-b border-gray-200 pb-4 mb-6">
                  <input type="radio" checked readOnly className="w-5 h-5 text-[#F27A1A] focus:ring-[#F27A1A]" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">Kart ile Öde</h3>
                    <p className="text-sm text-gray-500">Kart ile ödemeyi seçtiniz. Banka veya Kredi Kartı kullanarak ödemenizi güvenle yapabilirsiniz.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  
                  {/* Kayıtlı Kartlar Listesi */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-slate-800">Kart Bilgileri</h4>
                      <button onClick={() => openCardForm()} className="text-sm text-gray-500 underline hover:text-[#F27A1A]">Başka bir Kart ile Ödeme Yap</button>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {creditCards.map(card => (
                        <div 
                          key={card.id} 
                          onClick={() => setSelectedCardId(card.id)}
                          className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${selectedCardId === card.id ? 'border-[#F27A1A] bg-orange-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <input type="radio" checked={selectedCardId === card.id} readOnly className="text-[#F27A1A] focus:ring-[#F27A1A]" />
                            <span className="font-bold text-slate-800">{card.name_on_card} Kartım</span>
                          </div>
                          
                          {/* Kredi Kartı Görünümü */}
                          <div className="flex flex-col justify-between bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 rounded-md shadow-inner h-28">
                            <div className="flex justify-between items-center">
                              <CreditCard className="w-6 h-6 opacity-80" />
                              {/* Sahte Mastercard/Visa logoları temsili */}
                              <div className="flex space-x-[-10px]">
                                <div className="w-6 h-6 rounded-full bg-red-500 opacity-80"></div>
                                <div className="w-6 h-6 rounded-full bg-yellow-400 opacity-80"></div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="font-mono text-lg tracking-widest">{card.card_no.replace(/(.{4})/g, '$1 ')}</span>
                              <span className="font-mono text-sm opacity-80">{card.expire_month.toString().padStart(2, '0')}/{card.expire_year}</span>
                            </div>
                          </div>

                          {/* Düzenle / Sil */}
                          <div className="absolute top-4 right-4 flex gap-2">
                            <button onClick={(e) => { e.stopPropagation(); openCardForm(card); }} className="text-gray-400 hover:text-[#F27A1A]"><Edit className="w-4 h-4"/></button>
                            <button onClick={(e) => { e.stopPropagation(); dispatch(deleteCard(card.id)); }} className="text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4"/></button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-2">
                      <input type="checkbox" className="rounded text-[#F27A1A] focus:ring-[#F27A1A]" />
                      <span className="text-sm text-slate-800 font-bold">3D Secure ile ödemek istiyorum.</span>
                    </div>
                  </div>

                  {/* Taksit Seçenekleri (Görseldeki gibi sabit duruyor) */}
                  <div className="flex-1 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8">
                    <h4 className="font-bold text-slate-800 mb-1">Taksit Seçenekleri</h4>
                    <p className="text-sm text-gray-500 mb-4">Kartınıza uygun taksit seçeneğini seçiniz</p>
                    
                    <table className="w-full text-sm border-collapse border border-gray-200 rounded">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-200 p-3 text-left">Taksit Sayısı</th>
                          <th className="border border-gray-200 p-3 text-left">Aylık Ödeme</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-orange-50">
                          <td className="border border-gray-200 p-3 flex items-center gap-2">
                            <input type="radio" checked readOnly className="text-[#F27A1A]" /> Tek Çekim
                          </td>
                          <td className="border border-gray-200 p-3 font-bold">${grandTotal.toFixed(2)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* SAĞ TARAF: SİPARİŞ ÖZETİ VE ONAY KUTUSU (Ortak) */}
          <div className="w-full lg:w-[320px] flex flex-col gap-4 sticky top-24 h-max">
            
            {/* Buton Metni Sekmeye Göre Değişir */}
            <button 
              onClick={() => {
                if (activeTab === 'address' && selectedAddressId) setActiveTab('payment');
                else if (activeTab === 'payment') alert("Ödeme işlemi bir sonraki görevde yapılacak!");
                else alert("Lütfen bir adres seçin!");
              }}
              disabled={activeTab === 'payment' && (!selectedCardId || !agreedToTerms)}
              className="w-full bg-[#F27A1A] text-white font-bold py-3.5 rounded hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {activeTab === 'address' ? 'Kaydet ve Devam Et' : 'Ödeme Yap'}
            </button>

            {/* Ödeme Sekmesindeyse Sözleşme Onayı Çıkar */}
            {activeTab === 'payment' && (
              <div className="bg-white p-4 rounded shadow-sm border border-gray-200 flex items-start gap-3">
                <input 
                  type="checkbox" 
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 rounded text-[#F27A1A] focus:ring-[#F27A1A]" 
                />
                <p className="text-xs text-gray-600 leading-tight">
                  <span className="underline font-bold cursor-pointer">Ön Bilgilendirme Koşulları</span>'nı ve <span className="underline font-bold cursor-pointer">Mesafeli Satış Sözleşmesi</span>'ni okudum, onaylıyorum.
                </p>
              </div>
            )}

            {/* Sipariş Özeti Kutusu */}
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
              {isFreeShipping && (
                <div className="flex justify-between items-start mb-4 text-[#F27A1A]">
                  <span className="text-sm max-w-[160px] leading-tight">150 $ ve Üzeri Kargo Bedava</span>
                  <span className="font-bold">-${shippingDiscount.toFixed(2)}</span>
                </div>
              )}
              <hr className="my-4 border-gray-200" />
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800">Toplam</span>
                <span className="text-[#F27A1A] font-bold text-xl">${grandTotal.toFixed(2)}</span>
              </div>
            </div>
            
          </div>

        </div>
      </div>

      {/* --- MODALLAR (ADRES VE KART EKLME/DÜZENLEME) --- */}
      
      {/* ADRES MODALI */}
      {isAddressFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">{editingAddress ? 'Adresi Güncelle' : 'Yeni Adres Ekle'}</h2>
            <form onSubmit={handleAddressSubmit(onAddressSubmit)} className="flex flex-col gap-3">
              {/* Form alanları bir önceki adımda yazdığımızla aynı, burayı uzun tutmamak adına özetliyorum. Senin kodundaki form inputlarını buraya koyabilirsin. */}
              <input {...regAddress("title")} placeholder="Adres Başlığı" className="border p-2 rounded" required />
              <input {...regAddress("name")} placeholder="Ad" className="border p-2 rounded" required />
              <input {...regAddress("surname")} placeholder="Soyad" className="border p-2 rounded" required />
              <input {...regAddress("phone")} placeholder="Telefon" className="border p-2 rounded" required />
              <select {...regAddress("city")} className="border p-2 rounded" required>
                <option value="">İl Seçiniz</option>
                {cities.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <input {...regAddress("district")} placeholder="İlçe" className="border p-2 rounded" required />
              <textarea {...regAddress("neighborhood")} placeholder="Mahalle/Sokak/Bina" className="border p-2 rounded h-20 resize-none" required />
              <div className="flex justify-end gap-2 mt-2">
                <button type="button" onClick={() => setIsAddressFormOpen(false)} className="px-4 py-2 text-gray-500 bg-gray-100 rounded">İptal</button>
                <button type="submit" className="px-4 py-2 bg-[#F27A1A] text-white font-bold rounded">Kaydet</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* KART MODALI (Görseldeki Form) */}
      {isCardFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <h2 className="text-xl font-bold mb-6">{editingCard ? 'Kartı Güncelle' : 'Kart Bilgileri'}</h2>
            <form onSubmit={handleCardSubmit(onCardSubmit)} className="flex flex-col gap-4">
              
              <div>
                <label className="text-sm font-bold text-gray-700 block mb-1">Kart Üzerindeki İsim</label>
                <input {...regCard("name_on_card")} placeholder="Ad Soyad" className="w-full border p-2.5 rounded bg-gray-50 focus:bg-white" required />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 block mb-1">Kart Numarası</label>
                <input {...regCard("card_no")} maxLength="16" placeholder="1234 5678 9101 1121" className="w-full border p-2.5 rounded bg-gray-50 focus:bg-white tracking-widest font-mono" required />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-sm font-bold text-gray-700 block mb-1">Son Kullanma Tarihi</label>
                  <div className="flex gap-2">
                    <select {...regCard("expire_month")} className="w-full border p-2.5 rounded bg-gray-50 focus:bg-white" required>
                      <option value="">Ay</option>
                      {months.map(m => <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>)}
                    </select>
                    <select {...regCard("expire_year")} className="w-full border p-2.5 rounded bg-gray-50 focus:bg-white" required>
                      <option value="">Yıl</option>
                      {years.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                </div>
                
                <div className="w-1/3">
                  <label className="text-sm font-bold text-gray-700 block mb-1">CVV</label>
                  <input maxLength="3" placeholder="***" className="w-full border p-2.5 rounded bg-gray-50 focus:bg-white" />
                  {/* Not: API payloadında CVV istenmiyor, o yüzden register etmedik, sadece görsel amaçlı duruyor */}
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <button type="button" onClick={() => setIsCardFormOpen(false)} className="px-4 py-2.5 text-gray-500 bg-gray-100 font-bold rounded hover:bg-gray-200">İptal</button>
                <button type="submit" className="px-6 py-2.5 bg-[#F27A1A] text-white font-bold rounded hover:bg-orange-600">Kaydet</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}