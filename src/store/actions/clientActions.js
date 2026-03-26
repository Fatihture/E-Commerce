import { api } from '../../api/axiosInstance';
import { toast } from 'react-toastify';

export const setUser = (user) => ({ type: 'SET_USER', payload: user });
export const setRoles = (roles) => ({ type: 'SET_ROLES', payload: roles });
export const setTheme = (theme) => ({ type: 'SET_THEME', payload: theme });
export const setLanguage = (language) => ({ type: 'SET_LANGUAGE', payload: language });

// --- YENİ EKLENEN THUNK (LOGIN İŞLEMİ) ---
export const loginUser = (credentials, rememberMe, history) => async (dispatch) => {
  try {
    const response = await api.post('/login', credentials);
    const user = response.data; // Backend'den gelen kullanıcı verisi (token dahil)

    // 1. Redux Store'a kullanıcıyı kaydet
    dispatch(setUser(user));

    // 2. Remember Me seçiliyse Token'ı LocalStorage'a kaydet
    if (rememberMe) {
      localStorage.setItem('token', user.token);
    } else {
      localStorage.removeItem('token'); // Seçili değilse eski token'ı temizle
    }

    // 3. Bundan sonraki tüm Axios isteklerinin başlığına Token'ı yerleştir
    api.defaults.headers.common['Authorization'] = user.token;

    toast.success("Login successful! Welcome back.");

    // 4. Önceki sayfaya dön (Yoksa Home'a at)
    if (history.length > 2) {
      history.goBack();
    } else {
      history.push('/');
    }

  } catch (error) {
    // Başarısız olursa kullanıcıyı sayfada tut ve hatayı göster
    toast.error(error.response?.data?.message || "Login failed! Check your credentials.");
  }
};

// --- YENİ EKLENEN THUNK (AUTO-LOGIN / VERIFY İŞLEMİ) ---
export const verifyUser = () => async (dispatch) => {
  // 1. LocalStorage'da token var mı kontrol et
  const token = localStorage.getItem('token');
  
  // Eğer token yoksa fonksiyonu durdur, kimseyi rahatsız etme
  if (!token) return; 

  // 2. Token varsa, Kanban'ın dediği gibi (Bearer olmadan) Axios header'ına koy
  api.defaults.headers.common['Authorization'] = token;

  try {
    // 3. Backend'e "Bu token hala geçerli mi?" diye sor
    const response = await api.get('/verify');
    const user = response.data; // Geçerliyse backend taze kullanıcı bilgilerini (ve yeni token'ı) yollar

    // 4. Kullanıcıyı Redux Store'a koy (Arayüz anında güncellenir, isim/fotoğraf gelir)
    dispatch(setUser(user));

    // 5. Token'ı yenile (LocalStorage ve Axios header'da)
    localStorage.setItem('token', user.token);
    api.defaults.headers.common['Authorization'] = user.token;

  } catch (error) {
    // 6. Eğer token geçersizse (süresi dolmuşsa vs.) her şeyi temizle
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
  }
};
// -------------------------------------------------------
// ----------------------------------------

export const fetchRolesIfNeeded = () => async (dispatch, getState) => {
  const currentRoles = getState().client.roles;
  if (currentRoles.length > 0) return;
  try {
    const response = await api.get('/roles');
    dispatch(setRoles(response.data));
  } catch (error) {
    console.error("Roles fetch error:", error);
  }
};

export const setAddressList = (addressList) => ({ type: 'SET_ADDRESS_LIST', payload: addressList });

// 1. Adresleri Getir (GET)
export const fetchAddresses = () => async (dispatch) => {
  try {
    const response = await api.get('/user/address');
    dispatch(setAddressList(response.data));
  } catch (error) {
    console.error("Adresler çekilemedi:", error);
  }
};

// 2. Yeni Adres Ekle (POST)
export const addAddress = (addressData) => async (dispatch) => {
  try {
    await api.post('/user/address', addressData);
    dispatch(fetchAddresses()); // Başarılı olursa listeyi yenile!
    toast.success("Adres başarıyla eklendi.");
  } catch (error) {
    toast.error("Adres eklenirken bir hata oluştu.");
  }
};

// 3. Adres Güncelle (PUT)
export const updateAddress = (addressData) => async (dispatch) => {
  try {
    await api.put('/user/address', addressData);
    dispatch(fetchAddresses()); // Başarılı olursa listeyi yenile!
    toast.success("Adres güncellendi.");
  } catch (error) {
    toast.error("Adres güncellenirken bir hata oluştu.");
  }
};

// 4. Adres Sil (DELETE)
export const deleteAddress = (addressId) => async (dispatch) => {
  try {
    await api.delete(`/user/address/${addressId}`);
    dispatch(fetchAddresses()); // Başarılı olursa listeyi yenile!
    toast.success("Adres silindi.");
  } catch (error) {
    toast.error("Adres silinemedi.");
  }
};

export const setCreditCards = (cards) => ({ type: 'SET_CREDIT_CARDS', payload: cards });

// 1. Kartları Getir (GET)
export const fetchCards = () => async (dispatch) => {
  try {
    const response = await api.get('/user/card');
    dispatch(setCreditCards(response.data));
  } catch (error) {
    console.error("Kartlar çekilemedi:", error);
  }
};

// 2. Yeni Kart Ekle (POST)
export const addCard = (cardData) => async (dispatch) => {
  try {
    await api.post('/user/card', cardData);
    dispatch(fetchCards()); // Başarılıysa listeyi yenile
    toast.success("Kart başarıyla eklendi.");
  } catch (error) {
    toast.error("Kart eklenirken bir hata oluştu.");
  }
};

// 3. Kart Güncelle (PUT)
export const updateCard = (cardData) => async (dispatch) => {
  try {
    await api.put('/user/card', cardData);
    dispatch(fetchCards());
    toast.success("Kart güncellendi.");
  } catch (error) {
    toast.error("Kart güncellenirken bir hata oluştu.");
  }
};

// 4. Kart Sil (DELETE)
export const deleteCard = (cardId) => async (dispatch) => {
  try {
    await api.delete(`/user/card/${cardId}`);
    dispatch(fetchCards());
    toast.success("Kart silindi.");
  } catch (error) {
    toast.error("Kart silinemedi.");
  }
};