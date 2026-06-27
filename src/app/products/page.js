import Image from "next/image";
export default function ProductsPage() {

    const products = [
        {
            name: "Nike Air Max 270",
            price: "Rs 9,999",
            image: "/images/nike-airmax270.png",
        },
        {
            name: "Adidas Ultraboost",
            price: "Rs 11,999",
            image: "/images/adidas-ultraboost.png",

        },
        {
            name: "Puma RS-X",
            price: "Rs 8,499",
            image: "/images/puma-rsx.png",
        },
        {
            name: "New Balance 9060",
            price: "Rs 12,499",
            image: "/images/newbalance-9060.png",
        },
    ];

    return(
        <section className="min-h-screen bg-black text-white px-10 py-24">
            <h1 className="text-5xl font-bold text-center mb-15">
                Our Collection
            </h1>

            <div className="grid md:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div
                     key={product.name}
                     className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 hover:border-yellow-500 transition"
                     >
                        <div className="h-52 flex items-center justify-center">
                            <Image
                             src={product.image}
                             alt={product.name}
                             width={250}
                             height={250}
                             className="object-contain"
                             />

                             </div>
                             <h3 className="text-xl font-bold mt-4">
                                {product.name}

                             </h3>
                             
                             <p className="text-gray-400">
                                {product.price}
                             </p>

                             <button className="mt-4 bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold">
                                Add To Cart
                             </button>
                        </div>
                ))}
            </div>
        </section>
    );

}