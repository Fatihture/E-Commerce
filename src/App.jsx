import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';  
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';

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
            
            {/* SHOP SAYFASI ROTASI */}
            <Route exact path="/shop">
              <ShopPage />
            </Route>

            <Route path="/product/:id">
              <ProductDetailPage />
            </Route>

            {/* CONTACT SAYFASI ROTASI */}
            <Route exact path="/contact">
              <ContactPage />
            </Route>
            
          </Switch>
        </PageContent>

        <Footer />
      </div>
    </Router>
  );
}

export default App;