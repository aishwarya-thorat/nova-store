import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg w-full">
        <h1 className="text-6xl font-extrabold mb-6">
          NOVA
        </h1>

        <p className="text-gray-400 mb-12 text-lg">
          Choose how you want to continue
        </p>

        <div className="space-y-6">
          <Link href="/home">
            <button className="w-full bg-yellow-500 text-black py-4 rounded-2xl text-xl font-bold hover:scale-105 transition">
              🛍️ Shop Now
            </button>
          </Link>

          <Link href="/login">
            <button className="w-full border border-yellow-500 py-4 rounded-2xl text-xl font-bold hover:bg-yellow-500 hover:text-black transition">
              👑 Admin Portal
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}