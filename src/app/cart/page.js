"use client";

import { useContext } from "react";
import { CartContext } from 
"@/context/CartContext";

export default function CartPage() {

    const { cart, setCart } = useContext(CartContext);
    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) =>
    item.id !== id);
       setCart(updatedCart);
        
    };
    return(
        <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold mb-4">
                Your Cart
            </h1>

            <p className="text-gray-400">
                {cart.length} item(s) in your cart.
            </p>

            {cart.map((item,index) => (
                <div
                 key={index.id}
                 className="bg-zinc-900 rounded-xl p-6 w-96 mt-4"
                 >
                    <img
                     src={item.image}
                     alt={item.name}
                     className="w-40 mx-auto"
                     />

                     <h2 className="text-2xl font-bold mt-4">
                        {item.name}
                     </h2>

                     <p className="text-yellow-400 mt-2">
                        {item.price}
                     </p>

                     <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                      >
                        Remove
                      </button>
                 </div>
            ))}
        </section>
    );
}