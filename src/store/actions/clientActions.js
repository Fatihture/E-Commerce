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