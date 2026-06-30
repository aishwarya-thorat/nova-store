"use client";

import { useContext } from "react";
import { CartContext } from 
"@/context/CartContext";

export default function CartPage() {

    const { 
        cart,
        setCart,
        addToCart,
        decreaseQuantity,
     } = useContext(CartContext); 
   

    const total = cart.reduce((total, item) => {
        const price  = Number(
            item.price
               .replace("Rs","")
               .replace(",","")
        );

        return total + price * item.quantity;

    },0);
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
                 key={item.id}
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

                     <p className="text-gray-400 mt-2">
                        Quantity: {item.quantity}
                     </p>

                     <p className="text-yellow-400 mt-2">
                        Rs{" "}
                        {(
                            Number(
                                item.price 
                                  .replace("Rs","")
                                  .replace(",","")

                            ) * item.quantity
                        ).toLocaleString()}
                     </p>

                    <div className="flex items-center gap-4 mt-4">
                        <button
                          onClick={() => 
                    decreaseQuantity(item.id)}
                        className="bg-red-500 text-white w-10 h-10 rounded-full"
                        >
                            -
                        </button>

                        <span className ="text-xl font-bold">
                            {item.quantity}
                        </span>
                        <button 
                          onClick={() => addToCart(item)}
                          className="bg-green-500 text-white
                        w-10 h-10 rounded-full"
                         >
                            +
                         </button>
                          
                    </div>
                 </div>
            ))}

            <div className="mt-8 border-t border-zinc-700 pt-6 w-96">
                <h2 className="text-3xl font-bold">
                    Total: Rs {total.toLocaleString()}
                </h2>
            </div>
        </section>
    );
}