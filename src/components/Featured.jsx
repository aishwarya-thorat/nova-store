import Image from "next/image";
import Link from "next/link";
export default function Featured() {
    const sneakers = [
        {
            name: "Nike Air Max 270",
            slug:"nike-air-max-270",
            price: "Rs 9,999",
            image: "/images/nike-airmax270.png"
        },
        {
            name: "Adidas Ultraboost",
            slug:"adidas-ultraboost",
            price: "Rs 11,999",
            image: "/images/adidas-ultraboost.png"
        },
        {
            name: "Puma RS-X",
            slug:"puma-rs-x",
            price: "Rs 8,499",
            image: "/images/puma-rsx.png"
        },
        {
            name: "New Balance 9060",
            slug: "new-balance-9060",
            price: "Rs 12,499",
            image: "/images/newbalance-9060.png"
        }
    ];

    return(
        <section className="py-24 px-10 bg-black text-white">
            <h2 className="text-6xl font-bold text-center ">
                Featured Sneakers
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
                {sneakers.map((sneaker) => (
                    <div
                     key={sneaker.name}
                     className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 hover:border-yellow-500 transition"
                     >
                        <div className="h-52 flex items-center justify-center">
                        <Image
                         src={sneaker.image}
                         alt={sneaker.name}
                         width={300}
                         height={300}
                         className="object-contain"
                         />
                         </div>

                         <h3 className="text-xl font-bold-mt-4">
                            {sneaker.name}
                         </h3>

                         <p className="text-gray-400">
                            {sneaker.price}
                         </p>

                         <Link href={`/products/${sneaker.slug}`}>
                           <button className="mt-4 text-yellow-400 font-semibold">
                            View →
                           </button>
                         </Link>
                    </div>
                ))}
            </div>

        </section>
    );
}