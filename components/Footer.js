import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-100 bg-white py-16 px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
        <div className="col-span-2">
          <h2 className="text-xl font-bold tracking-tighter uppercase mb-6">VÉRA</h2>
          <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
            A design studio focused on minimalist aesthetics and sustainable luxury. Crafting timeless essentials for the modern silhouette.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-gray-400 mb-6">Collection</h4>
          <div className="flex flex-col gap-4 text-xs">
            <a href="#" className="hover:text-gray-500">New Arrivals</a>
            <a href="#" className="hover:text-gray-500">Best Sellers</a>
            <a href="#" className="hover:text-gray-500">Accessories</a>
          </div>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-gray-400 mb-6">Support</h4>
          <div className="flex flex-col gap-4 text-xs">
            <a href="#" className="hover:text-gray-500">Shipping</a>
            <a href="#" className="hover:text-gray-500">Returns</a>
            <a href="#" className="hover:text-gray-500">Care Guide</a>
          </div>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-gray-400 mb-6">Social</h4>
          <div className="flex flex-col gap-4 text-xs">
            <a href="#" className="hover:text-gray-500">Instagram</a>
            <a href="#" className="hover:text-gray-500">Pinterest</a>
            <a href="#" className="hover:text-gray-500">Journal</a>
          </div>
        </div>
      </div>
      <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-gray-400">
        <p>© 2024 VÉRA STUDIO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}