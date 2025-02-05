"use client"

import Image from "next/image"
import { useState } from "react"
import { useCart } from "@/app/contexts/CartContext"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
  category?: string
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart({ id, name, price, quantity: 1 })

    toast({
      title: "Added to Cart",
      description: `${name} has been added to your cart.`,
    })

    setTimeout(() => setIsAdding(false), 1000)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative aspect-w-3 aspect-h-4 bg-gray-200">
        <Image src={image || "/placeholder.svg"} alt={name} width={300} height={400} className="object-cover" />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          {category && <p className="mt-1 text-sm text-gray-500">{category}</p>}
          <p className="mt-1 text-xl font-semibold text-gray-900">${price.toFixed(2)}</p>
        </div>
        <div className="mt-4">
          <Button
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? "Adding..." : "Add to Cart"}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

