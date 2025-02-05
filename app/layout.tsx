import "./globals.css"
import { Inter } from "next/font/google"
import { CartProvider } from "./contexts/CartContext"
import { Toaster } from "@/components/ui/toaster"
import Header from "./components/Header"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ShopifyClone",
  description: "A simple e-commerce store",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}

