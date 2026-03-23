import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 1. Redux için gereken Provider'ı ve kendi oluşturduğumuz store'u içeri alıyoruz
import { Provider } from 'react-redux'
import { store } from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. App'i Provider içine alıyoruz ki Redux tüm projeyi kapsasın */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)