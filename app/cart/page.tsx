"use client"

import { useCart } from "../contexts/CartContext"
import { Button } from "../../components/ui/button"
import Link from "next/link"

export default function Cart() {
  const { cart, removeFromCart, getCartTotal } = useCart()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-4">
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <Button variant="destructive" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-xl font-bold">Total: ${getCartTotal().toFixed(2)}</p>
            <Link href="/checkout">
              <Button className="w-full mt-4">Proceed to Checkout</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

