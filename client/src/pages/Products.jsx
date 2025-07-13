import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header2";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  //get unique categories
  //set ka whi kaam hai wo DS me hota hai ie don't repeat the same category
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  //filter products by category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  //explain fiter products
  //if selectedCategory is "All", return all products, otherwise filter products by selectedCategory
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p>Loading Products...</p>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">
            Error loading products: {error.message}
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/**Header */}
        {/* <div className="bg-green-600 text-white py-10">
          <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Eco-Friendly Products
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Discover our range of eco-friendly products designed to reduce
              waste and promote sustainability.
            </p>
          </div>
        </div> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              Filter By Category
            </h2>
            <div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
                ${
                  selectedCategory === category
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 hover:bg-green-50 border border-gray-300"
                }`}
                >
                  {category === "All" ? "All Products" : category}
                </button>
              ))}
            </div>
          </div>
          {/** Products List/Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-600">
                    ${product.price}
                  </span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
            {/*in stock out of stock waala feature lagana*/}
          </div>
          {/* No products message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category or check back later.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
