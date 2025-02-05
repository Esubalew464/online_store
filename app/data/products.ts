export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  { id: 1, name: "Classic T-Shirt", price: 19.99, image: "/placeholder.svg?height=300&width=300", category: "Clothing" },
  { id: 2, name: "Denim Jeans", price: 49.99, image: "/placeholder.svg?height=300&width=300", category: "Clothing" },
  { id: 3, name: "Leather Jacket", price: 199.99, image: "/placeholder.svg?height=300&width=300", category: "Clothing" },
  { id: 4, name: "Running Shoes", price: 79.99, image: "/placeholder.svg?height=300&width=300", category: "Footwear" },
  { id: 5, name: "Summer Dress", price: 39.99, image: "/placeholder.svg?height=300&width=300", category: "Clothing" },
  { id: 6, name: "Wool Sweater", price: 59.99, image: "/placeholder.svg?height=300&width=300", category: "Clothing" },
  { id: 7, name: "Smartwatch", price: 129.99, image: "/placeholder.svg?height=300&width=300", category: "Electronics" },
  { id: 8, name: "Wireless Earbuds", price: 89.99, image: "/placeholder.svg?height=300&width=300", category: "Electronics" },
  { id: 9, name: "Backpack", price: 45.99, image: "/placeholder.svg?height=300&width=300", category: "Accessories" },
  { id: 10, name: "Sunglasses", price: 29.99, image: "/placeholder.svg?height=300&width=300", category: "Accessories" },
];

