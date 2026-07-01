"use client";
import Link from "next/link";

export default function SuccessPage() {
    return(
        <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center">

            <h1 className="text-6xl mb-8">
                🎉
            </h1>

            <h2 className="text-5xl font-bold">
                Order Placed!
            </h2>

            <p className="text-gray-400 mt-4">
                Thank you for Shopping with NOVA.
            </p>

            <Link href="/">
            <button className="mt-8 bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold">
                Continue Shopping</button>
            </Link>
        </section>
    );
}
