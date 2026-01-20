import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../lib/data';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

export default function Shop() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="pt-24 px-6">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filter - 30% */}
        <aside className="lg:w-64 flex-shrink-0">
          <h1 className="text-3xl font-bold tracking-tighter uppercase mb-8">Shop</h1>
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest text-gray-400">Categories</p>
            <div className="flex flex-col gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-left text-sm transition-colors ${filter === cat ? 'font-bold' : 'text-gray-500 hover:text-black'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Grid - 70% */}
        <main className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}