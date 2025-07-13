import React from "react";

const RetailerDashboard = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!"); // Add this to test
    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("description", e.target.description.value);
    formData.append("price", e.target.price.value);
    formData.append("category", e.target.category.value);
    formData.append("image", e.target.image.files[0]);
    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // }, error  throw korche BC
        credentials: "include",
        body: formData,
      });

      const data = await response.json();
      console.log("Response:", data);

      if (!response.ok) {
        console.error("Error:", data);
      } else {
        e.target.reset(); // Reset the form after successful submission
        alert("Product added successfully");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <>
      <a href="/" className="text-green-500 hover:underline block text-sm mb-4">
        ← Back to Home
      </a>
      <h1>Retailer Dashboard</h1>
      <div className="max-w-md mx-auto">
        <form
          className="flex flex-col bg-white p-4 rounded shadow-md gap-4"
          onSubmit={handleSubmit}
        >
          <input
            className="border border-gray-500"
            name="name"
            placeholder="Product name"
            required
          />
          <textarea
            className="border border-gray-500"
            name="description"
            placeholder="Description"
          />
          <input
            className="border border-gray-500"
            name="category"
            placeholder="Category"
            required
          />
          <input
            placeholder="Price"
            className="border border-gray-500"
            name="price"
            type="number"
            required
          />
          <input
            className="border border-gray-500"
            name="image"
            type="file"
            accept="image/*"
            required
          />
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2  cursor-pointer"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default RetailerDashboard;
