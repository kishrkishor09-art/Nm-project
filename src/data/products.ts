import { Product } from "@/types/product";
import tshirtImg from "@/assets/tshirt.jpg";
import mouseImg from "@/assets/mouse.jpg";
import walletImg from "@/assets/wallet.jpg";
import bottleImg from "@/assets/bottle.jpg";
import earbudsImg from "@/assets/earbuds.jpg";
import backpackImg from "@/assets/backpack.jpg";
import shoesImg from "@/assets/shoes.jpg";
import sunglassesImg from "@/assets/sunglasses.jpg";
import phonecaseImg from "@/assets/phonecase.jpg";
import notebooksImg from "@/assets/notebooks.jpg";
import lampImg from "@/assets/lamp.jpg";
import mugImg from "@/assets/mug.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Cotton T-Shirt",
    price: 499,
    category: "Clothing",
    description: "Comfortable 100% cotton t-shirt for everyday wear",
    image: tshirtImg
  },
  {
    id: "2",
    name: "Wireless Mouse",
    price: 699,
    category: "Electronics",
    description: "Ergonomic wireless mouse with long battery life",
    image: mouseImg
  },
  {
    id: "3",
    name: "Leather Wallet",
    price: 899,
    category: "Accessories",
    description: "Premium leather wallet with multiple card slots",
    image: walletImg
  },
  {
    id: "4",
    name: "Stainless Steel Water Bottle",
    price: 599,
    category: "Lifestyle",
    description: "Insulated water bottle keeps drinks cold for 24 hours",
    image: bottleImg
  },
  {
    id: "5",
    name: "Bluetooth Earbuds",
    price: 1499,
    category: "Electronics",
    description: "True wireless earbuds with noise cancellation",
    image: earbudsImg
  },
  {
    id: "6",
    name: "Backpack",
    price: 1299,
    category: "Bags",
    description: "Spacious laptop backpack with multiple compartments",
    image: backpackImg
  },
  {
    id: "7",
    name: "Running Shoes",
    price: 2499,
    category: "Footwear",
    description: "Lightweight running shoes with excellent cushioning",
    image: shoesImg
  },
  {
    id: "8",
    name: "Sunglasses",
    price: 799,
    category: "Accessories",
    description: "UV protection sunglasses with polarized lenses",
    image: sunglassesImg
  },
  {
    id: "9",
    name: "Phone Case",
    price: 399,
    category: "Electronics",
    description: "Durable protective case with shock absorption",
    image: phonecaseImg
  },
  {
    id: "10",
    name: "Notebook Set",
    price: 349,
    category: "Stationery",
    description: "Set of 3 premium quality notebooks",
    image: notebooksImg
  },
  {
    id: "11",
    name: "Desk Lamp",
    price: 1099,
    category: "Home",
    description: "LED desk lamp with adjustable brightness",
    image: lampImg
  },
  {
    id: "12",
    name: "Travel Mug",
    price: 449,
    category: "Lifestyle",
    description: "Spill-proof travel mug with temperature retention",
    image: mugImg
  }
];
