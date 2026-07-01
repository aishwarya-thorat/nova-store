"use client";

import { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CartContext } from "@/context/CartContext";

export default function ProductDetails() {
  const { slug } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.slug === slug);
        setProduct(found);
      });
  }, [slug]);

  if (!product) {
    return (
      <section className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white p-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="bg-zinc-900 rounded-3xl p-8 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-96"
          />
        </div>

        <div>
          <h1 className="text-5xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-yellow-400 text-3xl font-semibold mb-6">
            ₹{product.price.toLocaleString()}
          </p>

          <p className="text-zinc-400 mb-8">
            Premium sneaker designed for comfort,
            performance and everyday style.
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold"
          >
            Add To Cart
          </button>
        </div>

      </div>
    </section>
  );
}