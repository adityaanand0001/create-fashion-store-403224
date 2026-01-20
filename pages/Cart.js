import React from 'react';
import { useCart } from '../lib/store';
import { motion } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-40 px-6 text-center">
        <div className="inline-block p-6 bg-gray-50 rounded-full mb-6 text-gray-300">
          <ShoppingBag size={48} />
        </div>
        <h2 className="text-2xl font-bold tracking-tighter uppercase mb-4">Your bag is empty</h2>
        <Link to="/shop" className="text-xs uppercase tracking-widest bg-black text-white px-8 py-3 rounded-[6px]">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 px-6">
      <h1 className="text-3xl font-bold tracking-tighter uppercase mb-12">Shopping Bag</h1>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-20">
        <div className="space-y-8">
          {cart.map(item => (
            <motion.div 
              key={item.id} 
              layout 
              className="flex gap-6 pb-8 border-b border-gray-100"
            >
              <div className="w-24 h-32 flex-shrink-0 bg-gray-100 rounded-[6px] overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow flex justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-tighter">{item.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">Qty: {item.quantity}</p>
                  <p className="text-sm font-semibold mt-2">${item.price}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-black transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="bg-gray-50 p-8 h-fit rounded-[6px]">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Order Summary</h3>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span>${total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="pt-4 border-t border-gray-200 flex justify-between font-bold">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
          <button className="w-full mt-8 py-4 bg-black text-white text-xs uppercase tracking-widest rounded-[6px] hover:opacity-90 transition-opacity">
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
}