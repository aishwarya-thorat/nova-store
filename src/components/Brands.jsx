export default function Brands() {
  const brands = [
      { name: "Nike", count: "120+ Sneakers" },
  { name: "Adidas", count: "95+ Sneakers" },
  { name: "Puma", count: "80+ Sneakers" },
  { name: "New Balance", count: "60+ Sneakers" },
  { name: "Asics", count: "45+ Sneakers" },
  { name: "Converse", count: "35+ Sneakers" },

  ];

  return (
    <section className="py-24 px-8 bg-black">
      <h2 className="text-5xl font-bold text-center text-white mb-16">
        Explore Brands
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6XL mx-auto">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-yellow-500 hover:-translate-y-3"
          >
            <h3 className="text-3xl font-bold text-white">
              {brand.name}
            </h3>

            <p className="text-zinc-400 mt-3">
                {brand.count}
            </p>

            <p className="text-yellow-500 mt-6 font-medium">
                EXPLORE →
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}