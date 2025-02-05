import ProductCard from './components/ProductCard'

const products = [
  { id: 1, name: "Classic T-Shirt", price: 19.99, image: "/placeholder.svg?height=300&width=300" },
  { id: 2, name: "Denim Jeans", price: 49.99, image: "/placeholder.svg?height=300&width=300" },
  { id: 3, name: "Leather Jacket", price: 199.99, image: "/placeholder.svg?height=300&width=300" },
  { id: 4, name: "Running Shoes", price: 79.99, image: "/placeholder.svg?height=300&width=300" },
  { id: 5, name: "Summer Dress", price: 39.99, image: "/placeholder.svg?height=300&width=300" },
  { id: 6, name: "Wool Sweater", price: 59.99, image: "/placeholder.svg?height=300&width=300" },
]

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Welcome to </span>
          <span className="block text-indigo-600 xl:inline">ShopifyClone</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Discover our curated collection of high-quality products.
        </p>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard category={''} key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

