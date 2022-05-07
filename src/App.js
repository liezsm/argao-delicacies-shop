import { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Outlet,
} from "react-router-dom";

import Footer from "./components/Footer";
import LoginPage from "./components/Login/LoginPage";
import Homepage from "./components/Homepage";
import Spinner from "./components/Spinner";
import Products from "./components/Products";
import CartItems from "./components/CartItems";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // to create a loading effect
  useEffect(() => {
    if (!loading) {
      return;
    }
    let timer;
    if (loading) {
      navigate("/load");

      timer = setTimeout(() => {
        setLoading(false);
        navigate("/home");
      }, 4000);
    }

    return () => clearTimeout(timer);
  }, [loading, setLoading]);

  console.log("load", loading);
  return (
    <div className='App'>
      <Routes>
        {!isLogin && (
          <Route
            index
            element={<LoginPage isLogged={setLogin} loading={setLoading} />}
          />
        )}

        {loading && <Route path='/load' element={<Spinner />} />}
        {isLogin && !loading && (
          <Route path='/home' element={<Homepage loading={loading} />}>
            <Route index element={<Products />} />
            <Route path='product/:id' element={<ProductDetail />} />

            <Route path='cartItems' element={<CartItems />} />
          </Route>
        )}
      </Routes>
      {!loading && <Footer />}

      <Outlet />
    </div>
  );
}

export default App;
