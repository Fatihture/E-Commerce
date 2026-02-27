import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';

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
            {/* İleride buraya diğer sayfalar (/shop, /contact) eklenecek */}
          </Switch>
        </PageContent>

        <Footer />
      </div>
    </Router>
  );
}

export default App;