"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();

  const { cart, clearCart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  async function placeOrder() {
    if (!name || !email || !address) {
      alert("Please fill all details.");
      return;
    }

    await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerName: name,
        email,
        address,
        items: cart,
        total,
        status: "Pending",
        createdAt: new Date(),
      }),
    });

    clearCart();

    router.push("/success");
  }

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-8">
        Checkout
      </h1>

      <form
        className="w-full max-w-md space-y-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 rounded-xl bg-zinc-900"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-xl bg-zinc-900"
        />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-4 rounded-xl bg-zinc-900"
        />

        <div className="text-xl font-bold">
          Total: ₹{total.toLocaleString()}
        </div>

        <button
          type="button"
          onClick={placeOrder}
          className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold"
        >
          Place Order
        </button>
      </form>
    </section>
  );
}