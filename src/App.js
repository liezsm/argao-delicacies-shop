import Header from "./components/Header";
import Products from "./components/Products";
import CartItems from "./components/CartItems";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Products />} />

          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/cartItems' element={<CartItems />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
