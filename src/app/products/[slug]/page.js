"use client";

import { useContext } from "react";
import { useParams} from "next/navigation";
import { CartContext} from 
"@/context/CartContext";

export default function ProductDetails() {
    const { slug } = useParams();

    const { addToCart } = 
  useContext(CartContext);

    const products = {
        "nike-air-max-270":{
            id:1,
            name: "Nike Air Max 270",
            price: "Rs 9,999",
            image: "/images/nike-airmax270.png",
        },

        "adidas-ultraboost" : {
            id:2,
            name: "Adidas Ultraboost",
            price: "Rs 11,999",
            image: "/images/adidas-ultraboost.png",
        },

        "puma-rs-x": {
            id:3,
            name: "Puma RS-X",
            price: "Rs 8,499",
            image: "/images/puma-rsx.png",
        },

        "new-balance-9060": {
            id:4,
            name:"New Balance 9060",
            price: "Rs 12,499",
            image: "/images/newbalance-9060.png"
        },
    };

    const product = products[slug];

    return(
        <section className="min-h-screen bg-black text-white p-10">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-zinc-900 rounded-3xl p-8 flex justify-center">
                    <img
                     src={product.image}
                     alt="shoe"
                     className="w-96"
                    />
                </div>

                <div>
                    <h1 className="text-5xl font-bold mb-4">
                        {product.name}
                    </h1>

                    <p className="text-yellow-400 text-3xl font-semibold mb-6">
                        {product.price}
                    </p>

                    <p className="text-zinc-400 mb-8">
                        Premium sneaker designed for comfort,
                        performance and everyday style.
                    </p>

                    <button 
                      onClick= {() => addToCart(product)}
                      className="bg-yellow-400 text-black 
                      px-8 py-3 rounded-full font-semibold"
                      >
                        Add To Cart
                    </button>
                </div>
            </div>
        </section>
    );
}