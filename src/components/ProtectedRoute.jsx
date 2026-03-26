import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children, ...rest }) {
  // Redux'ta kullanıcı var mı veya localStorage'da token var mı diye bakıyoruz
  const user = useSelector(state => state.client.user);
  const token = localStorage.getItem('token');

  return (
    <Route 
      {...rest} 
      render={({ location }) => {
        // Kullanıcı giriş yaptıysa sayfayı (children) göster
        if (user?.name || token) {
          return children;
        }
        // Giriş yapmadıysa geldiği adresi hafızada tutarak (state) Login'e yolla
        return <Redirect to={{ pathname: "/login", state: { from: location } }} />;
      }} 
    />
  );
}