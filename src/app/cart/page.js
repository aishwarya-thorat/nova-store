"use client";

import { useContext } from "react";
import { CartContext } from 
"@/context/CartContext";

export default function CartPage() {

    const { cart } = useContext(CartContext);
    return(
        <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold mb-4">
                Your Cart
            </h1>

            <p className="text-gray-400">
                {cart.length} item(s) in your cart.
            </p>
        </section>
    );
}