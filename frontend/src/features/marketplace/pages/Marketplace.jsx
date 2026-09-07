import { useState } from "react";
import initialData from "E:/gramlink/frontend/src/data/marketData.json"  // Importing your marketplace data

function Marketplace() {
  // 1. STATE: Store products here
  const [products, setProducts] = useState(initialData);

  // Form State
  const [form, setForm] = useState({ name: "", price: "", category: "Farming" });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  // --- CRUD LOGIC ---

  // CREATE (Sell Item)
  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return alert("Please fill details");

    const newProduct = {
      id: Date.now(),
      image: "https://placehold.co/150x150?text=New+Item", // Placeholder image
      ...form,
    };

    setProducts([newProduct, ...products]); // Add to top of list
    resetForm();
  };

  // UPDATE (Edit Item)
  const handleEditClick = (product) => {
    setIsEditing(true);
    setCurrentId(product.id);
    setForm(product);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedProducts = products.map((item) =>
      item.id === currentId ? { ...item, ...form } : item
    );
    setProducts(updatedProducts);
    resetForm();
  };

  // DELETE (Remove Item)
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      const filtered = products.filter((item) => item.id !== id);
      setProducts(filtered);
    }
  };

  const resetForm = () => {
    setForm({ name: "", price: "", category: "Farming" });
    setIsEditing(false);
    setCurrentId(null);
  };

  return (
    <div className="min-h-screen bg-amber-50 p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1f4d3a] mb-8 text-center">
          🛒 Marketplace Dashboard
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- LEFT: SELLER FORM --- */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
                {isEditing ? "Edit Product" : "List New Item"}
              </h2>
              
              <form onSubmit={isEditing ? handleUpdate : handleAdd} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Product Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border-gray-300 border p-2.5 focus:ring-2 focus:ring-green-500 outline-none"
                    placeholder="e.g. Rice 50kg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Price (₹)</label>
                  <input
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className="w-full rounded-lg border-gray-300 border p-2.5 focus:ring-2 focus:ring-green-500 outline-none"
                    placeholder="e.g. 1200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full rounded-lg border-gray-300 border p-2.5 outline-none"
                  >
                    <option>Farming</option>
                    <option>Seeds</option>
                    <option>Machinery</option>
                    <option>Vegetables</option>
                  </select>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="submit"
                    className={`flex-1 py-3 px-4 rounded-lg text-white font-bold shadow-md transition transform active:scale-95 ${
                      isEditing ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-900 hover:bg-green-700"
                    }`}
                  >
                    {isEditing ? "Update Item" : "Sell Item"}
                  </button>
                  
                  {isEditing && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-4 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 font-medium"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* --- RIGHT: PRODUCT GRID --- */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  {/* Fake Image Area */}
                  <div className="h-32 bg-gray-200 relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover opacity-80" 
                    />
                    <span className="absolute top-2 right-2 bg-white/90 px-2 py-1 text-xs font-bold rounded-md text-gray-700 shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                      <p className="text-2xl font-bold text-green-700 mt-1">₹{item.price}</p>
                    </div>

                    <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                      <button
                        onClick={() => handleEditClick(item)}
                        className="flex-1 py-2 rounded-md bg-yellow-50 text-yellow-700 font-medium text-sm hover:bg-yellow-100 border border-yellow-200"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="flex-1 py-2 rounded-md bg-red-50 text-red-700 font-medium text-sm hover:bg-red-100 border border-red-200"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {products.length === 0 && (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-500 text-lg">No products listed yet.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Marketplace;