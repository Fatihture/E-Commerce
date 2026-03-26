import { api } from '../../api/axiosInstance';
import { toast } from 'react-toastify';

export const setCart = (cart) => ({ type: 'SET_CART', payload: cart });
export const setPayment = (payment) => ({ type: 'SET_PAYMENT', payload: payment });
export const setAddress = (address) => ({ type: 'SET_ADDRESS', payload: address });

export const addToCart = (product) => ({ type: 'ADD_TO_CART', payload: product });

export const removeFromCart = (productId) => ({ type: 'REMOVE_FROM_CART', payload: productId });
export const updateCartItemCount = (productId, newCount) => ({ type: 'UPDATE_CART_ITEM_COUNT', payload: { productId, newCount } });
export const toggleCartItemCheck = (productId) => ({ type: 'TOGGLE_CART_ITEM_CHECK', payload: productId });

export const clearCart = () => ({ type: 'CLEAR_CART' });

// 2. Siparişi Tamamlama (POST) Thunk'ı
export const createOrder = (orderPayload, history) => async (dispatch) => {
  try {
    // API'ye siparişi gönderiyoruz
    await api.post('/order', orderPayload);
    
    // Müşteriyi tebrik et!
    toast.success("🎉 Tebrikler! Siparişiniz başarıyla oluşturuldu.", { position: "top-center", autoClose: 5000 });
    
    // Sepeti sıfırla
    dispatch(clearCart());
    
    // İşlem bitince ana sayfaya (veya yaparsan bir 'Sipariş Başarılı' sayfasına) yönlendir
    history.push('/'); 
    
  } catch (error) {
    console.error("Sipariş oluşturulurken hata:", error);
    toast.error("Siparişiniz oluşturulamadı. Lütfen bilgilerinizi kontrol edin.");
  }
};