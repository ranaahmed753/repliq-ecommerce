import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './modules/Home';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart';
import Register from './modules/Register';
import { useUser } from './context/AuthContext';
//import Login from './modules/Login';

function App() {
  const { getUser } = useUser()
  const [user, setUser] = useState(null)
  useEffect(() => {
    const fetchedUser = getUser()
    setUser(fetchedUser)
    console.log(fetchedUser)
  }, [getUser])
  return (
    <div>
      {
        user ? <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories/:name" element={<CategoryProducts />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
          <Footer />
        </> : <>
          <Routes>
            <Route path='/register' element={<Register />} />
          </Routes>
          {/* <Register /> */}
        </>


      }


    </div>
  );
}

export default App;
