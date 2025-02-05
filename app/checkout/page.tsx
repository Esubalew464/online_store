"use client"

import { useState } from "react"
import Link from "next/link"
import { useCart } from "../contexts/CartContext"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"

export default function Checkout() {
  const { cart, getCartTotal, clearCart } = useCart()
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error">("idle")
  const [cardNumber, setCardNumber] = useState("5341837602679922")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setPaymentStatus("processing")

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simulate successful payment (in a real app, you'd integrate with a payment gateway here)
    if (cardNumber === "5341837602679922") {
      setPaymentStatus("success")
      clearCart()
    } else {
      setPaymentStatus("error")
    }
  }

  if (paymentStatus === "success") {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Thank you for your purchase!</h1>
        <p>Your order has been successfully processed.</p>
        <Link href="/">
          <Button className="mt-8">Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  if (paymentStatus === "error") {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-red-600">Payment Failed</h1>
        <p>There was an error processing your payment. Please try again.</p>
        <Button className="mt-8" onClick={() => setPaymentStatus("idle")}>
          Try Again
        </Button>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-xl font-bold">Total: ${getCartTotal().toFixed(2)}</div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="cardName">Name on Card</Label>
              <Input id="cardName" required />
            </div>
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
                pattern="[0-9]{16}"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" required pattern="(0[1-9]|1[0-2])\/[0-9]{2}" placeholder="MM/YY" />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" required pattern="[0-9]{3,4}" placeholder="123" />
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={paymentStatus === "processing"}>
              {paymentStatus === "processing" ? "Processing..." : "Pay Now"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

