import React, { useState, useEffect } from 'react';
import { ChevronLeft, Home } from 'lucide-react';
import axios from 'axios';

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    sku: '',
    status: 'available',
    category: '',
    imageUrl: '',
  });

  const [categories, setCategories] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    axios.get('/api/categories') 
      .then(res => setCategories(res.data))
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  // ... (handleInputChange, handleImageUpload, validateForm, handleSubmit functions as before)

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        {/* ... sidebar content ... */}
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        {/* ... navigation buttons ... */}

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl font-bold mb-6">Create Product</h1>
          <form onSubmit={handleSubmit}>
            {/* Input fields for name, description, price, sku, etc. */}
            {/* ... input fields (same as before but with error handling) ... */}
            <div className="mb-4">
              <label htmlFor="image">Image</label>
              <input type="file" onChange={handleImageUpload} />
              {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 h-24" />}
            </div>
            <div className="mb-4">
              <label htmlFor="status">Status</label>
              <select id="status" name="status" value={formData.status} onChange={handleInputChange}>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="category">Category</label>
              <select id="category" name="category" value={formData.category} onChange={handleInputChange}>
                <option value="">Select category...</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
              {formErrors.category && <p className="text-red-500 text-xs italic">{formErrors.category}</p>}
            </div>

            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'CREATING...' : 'CREATE PRODUCT'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
