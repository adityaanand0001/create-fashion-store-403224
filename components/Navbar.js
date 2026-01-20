import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { useCart } from '../lib/store';

export default function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="w-full flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-8">
          <button className="lg:hidden"><Menu size={20} /></button>
          <Link to="/" className="text-xl font-bold tracking-tighter uppercase">VÉRA</Link>
          <div className="hidden lg:flex items-center gap-6 text-xs font-medium uppercase tracking-widest">
            <Link to="/shop" className="hover:text-gray-500 transition-colors">Collections</Link>
            <Link to="/shop" className="hover:text-gray-500 transition-colors">Journal</Link>
            <Link to="/shop" className="hover:text-gray-500 transition-colors">About</Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button className="hover:opacity-60 transition-opacity"><Search size={18} /></button>
          <Link to="/cart" className="relative hover:opacity-60 transition-opacity">
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}