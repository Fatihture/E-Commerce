import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';  
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <PageContent>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            
            {/* SHOP */}
            <Route exact path="/shop">
              <ShopPage />
            </Route>

            <Route path="/product/:id">
              <ProductDetailPage />
            </Route>

            {/* CONTACT */}
            <Route exact path="/contact">
              <ContactPage />
            </Route>

            <Route exact path="/about">
              <AboutPage />
            </Route>

            <Route exact path="/signup">
              <SignupPage />
            </Route>
            
          </Switch>
        </PageContent>

        <Footer />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;