import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const InventoryBrowser = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data for demonstration
  const inventoryItems = [
    { id: 1, name: 'Item 1', category: 'Category A', color: 'Red', sku: 'SKU001' },
    { id: 2, name: 'Item 2', category: 'Category B', color: 'Blue', sku: 'SKU002' },
    { id: 3, name: 'Item 3', category: 'Category C', color: 'Green', sku: 'SKU003' },
  ];

  const filteredItems = inventoryItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Browse</h1>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="default" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search by product name or description"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Product</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Color</th>
              <th className="px-4 py-2 text-left">In Stock</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">{item.color}</td>
                <td className="px-4 py-2">{item.sku}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryBrowser;
