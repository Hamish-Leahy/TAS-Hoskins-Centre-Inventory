import React from 'react';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';

const ProductView = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center">
        <button className="flex items-center text-gray-600">
          <ArrowLeft className="mr-2" />
          GO BACK
        </button>
        <button className="text-blue-600">Edit Product</button>
      </header>
      
      <nav className="bg-white w-64 p-4">
        <ul>
          <li className="bg-blue-100 p-2 rounded mb-2">Home</li>
          <li className="p-2 mb-2">Add New Product</li>
          <li className="p-2">Account</li>
        </ul>
      </nav>
      
      <main className="flex-grow p-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between mb-6">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded">IN STOCK</span>
            <span className="text-gray-500">Serial Number</span>
          </div>
          
          <div className="flex">
            <div className="w-1/2 pr-4">
              <h1 className="text-2xl font-bold mb-2">Name</h1>
              <p className="text-gray-600 mb-4">Description</p>
              
              <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
                ADD TO CART
              </button>
              
              <div className="mt-6">
                <p className="font-semibold mb-1">Category</p>
                <p className="text-gray-600 mb-4">Name</p>
                
                <p className="font-semibold mb-1">Status</p>
                <p className="text-gray-600 mb-4">Status</p>
                
                <p className="font-semibold mb-1">Description</p>
                <p className="text-gray-600">Marketing Description</p>
              </div>
            </div>
            
            <div className="w-1/2">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <ImageIcon size={48} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-200 p-4 text-center text-sm text-gray-600">
        Want to try tech only immersive?
        <button className="ml-2 text-blue-600">Sign in as Sample User</button>
      </footer>
    </div>
  );
};

export default ProductView;
