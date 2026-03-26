import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { verifyUser } from './store/actions/clientActions';
import { fetchCategories } from './store/actions/productActions'; // YENİ EKLENDİ

import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';  
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage'; // YENİ EKLENDİ

import ProtectedRoute from './components/ProtectedRoute';
 import CreateOrderPage from './pages/CreateOrderPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyUser());
    dispatch(fetchCategories()); // EKLENDİ: Uygulama açılırken kategorileri çek
  }, [dispatch]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <Header />
        
        <PageContent>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/cart">
             <CartPage />
            </Route>

            <ProtectedRoute exact path="/create-order">
              <CreateOrderPage />
            </ProtectedRoute>

            <Route exact path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId">
              <ProductDetailPage />
            </Route>

            <Route path="/shop/:gender/:categoryName/:categoryId">
              <ShopPage />
            </Route>
            
            <Route exact path="/shop">
              <ShopPage />
            </Route>

            <Route path="/product/:id">
              <ProductDetailPage />
            </Route>

            <Route exact path="/contact">
              <ContactPage />
            </Route>

            <Route exact path="/about">
              <AboutPage />
            </Route>

            <Route exact path="/signup">
              <SignupPage />
            </Route>

            <Route exact path="/login">
              <LoginPage />
            </Route>
            
          </Switch>
        </PageContent>

        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;