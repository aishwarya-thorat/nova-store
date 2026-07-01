"use client";
import Image from "next/image";
import {useContext} from "react";
import { CartContext } from
"@/context/CartContext";
import { useState, useEffect } from "react";
export default function ProductsPage() {

    const {addToCart} = 
    useContext(CartContext);

    const [products, setProducts] = 
    useState([]);

    const [search, setSearch] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("All");

    useEffect(() => {
        fetch("/api/products")
         .then((res) => res.json())
         .then((data) => setProducts(data));
    }, []);

    const filteredProducts = 
    products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesBrand = 
        selectedBrand === "All" ||
        product.brand === selectedBrand;

    

      return matchesSearch && matchesBrand;


    });
   

   

    return(
        <section className="min-h-screen bg-black text-white px-10 py-24">
            <h1 className="text-5xl font-bold text-center mb-15">
                Our Collection
            </h1>

            <input 
              type="text"
              placeholder="Search sneakers..."
              value={search}
              onChange={(e) => 
        setSearch(e.target.value)}
              className="w-full p-4 rounded-xl bg-zinc-900 text-white mb-8 outline-none borber border-zinc-700"
            />

            <div className="flex gap-4 mb-8 flex-wrap">
                {["All","Nike","Adidas","Puma","New Balance"].map((brand) => (
                    <button
                      key={brand}
                      onClick={() => 
                setSelectedBrand(brand)}
                      className={`px-5 py-2 rounded-full $ {
                          selectedBrand === brand
                            ? "bg-yellow-500 text-black"
                            : "bg-zinc-800 text-white"
                            }`}
                    >
                        {brand}
                    </button>
                      
                ))}
            </div>
              

            <div className="grid md:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                    <div
                     key={product._id}
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
                                Rs {product.price.toLocaleString()}
                             </p>

                             <button 
                               onClick={() => addToCart(product)}
                               className="mt-4 bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold">
                                Add To Cart
                             </button>
                        </div>
                ))}
            </div>
        </section>
    );

}