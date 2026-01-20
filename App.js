import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './lib/store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">
          <Navbar />
          <main className="pb-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}