import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../lib/store';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <Link to={`/product/${product.id}`}>
        <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-[6px]">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-tighter">{product.category}</p>
        </div>
        <p className="text-sm font-semibold">${product.price}</p>
      </div>
      <button 
        onClick={() => addToCart(product)}
        className="mt-3 w-full py-2 bg-black text-white text-[10px] uppercase tracking-widest rounded-[6px] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
      >
        Add to Bag
      </button>
    </motion.div>
  );
}