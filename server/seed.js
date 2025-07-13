import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from parent directory (project root)
dotenv.config({ path: path.resolve(__dirname, "../.env") });

import mongoose from "mongoose";
import Product from "./models/product.model.js"; // Adjust path to your Product model

// Create a dummy ObjectId for createdBy (you can replace this with an actual user ID if you have one)
const dummyUserId = new mongoose.Types.ObjectId();

const ecoFriendlyProducts = [
  {
    name: "Bamboo Toothbrush Set",
    description:
      "Biodegradable bamboo toothbrushes with soft bristles. Pack of 4 eco-friendly toothbrushes perfect for the whole family.",
    price: 15.99,
    category: "Personal Care",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
  {
    name: "Reusable Stainless Steel Water Bottle",
    description:
      "Double-wall insulated stainless steel bottle keeps drinks cold for 24h or hot for 12h. BPA-free and leak-proof.",
    price: 24.99,
    category: "Kitchen & Dining",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
  {
    name: "Organic Cotton Reusable Shopping Bags",
    description:
      "Set of 3 organic cotton mesh bags perfect for grocery shopping. Machine washable and durable.",
    price: 18.5,
    category: "Household",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
  {
    name: "Solar-Powered Garden Lights",
    description:
      "Set of 8 LED solar garden lights with automatic on/off sensor. Weather-resistant and easy to install.",
    price: 32.99,
    category: "Garden & Outdoor",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
  {
    name: "Compost Bin with Lid",
    description:
      "Large 5-gallon compost bin made from recycled plastic. Perfect for kitchen scraps and garden waste.",
    price: 29.99,
    category: "Garden & Outdoor",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
  {
    name: "Beeswax Food Wraps",
    description:
      "Set of 3 different sizes of beeswax wraps. Natural alternative to plastic wrap for food storage.",
    price: 16.99,
    category: "Kitchen & Dining",
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
  {
    name: "Recycled Paper Notebooks",
    description:
      "Pack of 3 notebooks made from 100% recycled paper. Perfect for journaling or note-taking.",
    price: 12.99,
    category: "Office & Stationery",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
  {
    name: "Organic Hemp T-Shirt",
    description:
      "Soft and comfortable t-shirt made from organic hemp fiber. Available in multiple colors.",
    price: 28.99,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
  {
    name: "Wooden Phone Stand",
    description:
      "Handcrafted wooden phone stand made from sustainable bamboo. Compatible with all phone sizes.",
    price: 19.99,
    category: "Electronics & Accessories",
    image:
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
  {
    name: "Natural Soap Bar Set",
    description:
      "Set of 4 handmade soap bars with essential oils. Free from chemicals and artificial fragrances.",
    price: 22.99,
    category: "Personal Care",
    image:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
  {
    name: "Reusable Silicone Food Storage Bags",
    description:
      "Set of 4 leak-proof silicone bags in different sizes. Dishwasher safe and freezer friendly.",
    price: 25.99,
    category: "Kitchen & Dining",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
  {
    name: "Eco-Friendly Yoga Mat",
    description:
      "Non-slip yoga mat made from natural rubber and cork. Biodegradable and non-toxic.",
    price: 45.99,
    category: "Sports & Fitness",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
  {
    name: "LED Energy-Efficient Bulbs",
    description:
      "Pack of 6 LED bulbs that use 80% less energy than traditional bulbs. Long-lasting and bright.",
    price: 19.99,
    category: "Home & Garden",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
  {
    name: "Recycled Plastic Outdoor Rug",
    description:
      "Durable outdoor rug made from recycled plastic bottles. Weather-resistant and easy to clean.",
    price: 89.99,
    category: "Home & Garden",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
  {
    name: "Organic Cotton Towel Set",
    description:
      "Set of 4 soft organic cotton towels. Chemical-free and naturally absorbent.",
    price: 39.99,
    category: "Personal Care",
    image:
      "https://images.unsplash.com/photo-1631889993959-41b4e9c8e9b6?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
  {
    name: "Stainless Steel Food Containers",
    description:
      "Set of 3 stackable stainless steel containers with leak-proof lids. Perfect for meal prep.",
    price: 34.99,
    category: "Kitchen & Dining",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
  {
    name: "Biodegradable Plant Pots",
    description:
      "Set of 20 biodegradable plant pots made from coconut fiber. Perfect for seedlings.",
    price: 14.99,
    category: "Garden & Outdoor",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
  {
    name: "Rechargeable Battery Pack",
    description:
      "Set of 8 AA/AAA rechargeable batteries with charger. Reduce waste and save money.",
    price: 29.99,
    category: "Electronics & Accessories",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
  {
    name: "Wool Dryer Balls",
    description:
      "Set of 6 organic wool dryer balls. Natural fabric softener that reduces drying time.",
    price: 18.99,
    category: "Household",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
  {
    name: "Glass Water Bottles with Silicone Sleeve",
    description:
      "Set of 2 borosilicate glass water bottles with protective silicone sleeves. BPA-free and dishwasher safe.",
    price: 27.99,
    category: "Kitchen & Dining",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
    inStock: true,
    ecoFriendly: true,
    createdBy: dummyUserId,
  },
];

const seedDatabase = async () => {
  try {
    // Check if MONGO_URI is defined
    if (!process.env.MONGO_URI) {
      console.error("MONGO_URI is not defined in environment variables");
      console.error("Please check your .env file");
      process.exit(1);
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Clear existing products (optional - remove if you want to keep existing products)
    await Product.deleteMany({});
    console.log("Cleared existing products");

    // Insert seed data
    const products = await Product.insertMany(ecoFriendlyProducts);
    console.log(`Successfully seeded ${products.length} eco-friendly products`);

    // Display some sample products
    console.log("\nSample products added:");
    products.slice(0, 3).forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} - $${product.price}`);
    });

    // Close connection
    await mongoose.connection.close();
    console.log("\nDatabase connection closed");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
