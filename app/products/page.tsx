'use client'

import { useState } from 'react'
import { products, Product } from '../data/products'
import ProductCard from '../components/ProductCard'
import { Button } from '@/components/ui/button'

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(products.map(product => product.category)))

  const filterProducts = (category: string | null) => {
    setSelectedCategory(category)
    if (category) {
      setFilteredProducts(products.filter(product => product.category === category))
    } else {
      setFilteredProducts(products)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Our Products
        </h1>
        <div className="mt-8">
          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              onClick={() => filterProducts(null)}
              variant={selectedCategory === null ? "default" : "outline"}
            >
              All
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => filterProducts(category)}
                variant={selectedCategory === category ? "default" : "outline"}
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

