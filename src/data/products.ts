export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  age: string;
  sizes: string[];
  colors: string[];
  badge?: string;
  rating: number;
  reviews: number;
}

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Blush Pink Flutter Frock",
    price: 1299,
    originalPrice: 1799,
    image: product1,
    category: "Girls",
    age: "1-3 Years",
    sizes: ["6M", "1Y", "2Y", "3Y"],
    colors: ["Pink", "White", "Peach"],
    badge: "Best Seller",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Classic Blue Casual Set",
    price: 999,
    originalPrice: 1499,
    image: product2,
    category: "Boys",
    age: "2-5 Years",
    sizes: ["2Y", "3Y", "4Y", "5Y"],
    colors: ["Blue", "Navy", "Grey"],
    rating: 4.6,
    reviews: 89,
  },
  {
    id: "3",
    name: "Soft Cotton Baby Romper",
    price: 799,
    image: product3,
    category: "Infant",
    age: "0-12 Months",
    sizes: ["0-3M", "3-6M", "6-9M", "9-12M"],
    colors: ["White", "Cream", "Mint"],
    badge: "New",
    rating: 4.9,
    reviews: 201,
  },
  {
    id: "4",
    name: "Lavender Party Gown",
    price: 2499,
    originalPrice: 3299,
    image: product4,
    category: "Girls",
    age: "3-7 Years",
    sizes: ["3Y", "4Y", "5Y", "6Y", "7Y"],
    colors: ["Lavender", "Pink", "White"],
    badge: "Festive",
    rating: 4.7,
    reviews: 67,
  },
  {
    id: "5",
    name: "Cream Kurta Pyjama Set",
    price: 1899,
    originalPrice: 2499,
    image: product5,
    category: "Ethnic Wear",
    age: "3-8 Years",
    sizes: ["3Y", "4Y", "5Y", "6Y", "7Y", "8Y"],
    colors: ["Cream", "Gold", "White"],
    rating: 4.8,
    reviews: 156,
  },
  {
    id: "6",
    name: "Sunshine Yellow Cotton Dress",
    price: 899,
    image: product6,
    category: "Girls",
    age: "1-5 Years",
    sizes: ["1Y", "2Y", "3Y", "4Y", "5Y"],
    colors: ["Yellow", "Orange", "Pink"],
    rating: 4.5,
    reviews: 93,
  },
  {
    id: "7",
    name: "Striped Casual T-Shirt Set",
    price: 699,
    originalPrice: 999,
    image: product7,
    category: "Boys",
    age: "1-4 Years",
    sizes: ["1Y", "2Y", "3Y", "4Y"],
    colors: ["Red", "Blue", "Green"],
    badge: "Sale",
    rating: 4.4,
    reviews: 78,
  },
  {
    id: "8",
    name: "Green Festive Lehenga Choli",
    price: 2999,
    originalPrice: 3999,
    image: product8,
    category: "Ethnic Wear",
    age: "5-12 Years",
    sizes: ["5Y", "6Y", "7Y", "8Y", "10Y", "12Y"],
    colors: ["Green", "Red", "Blue"],
    badge: "Festive",
    rating: 4.9,
    reviews: 182,
  },
];
