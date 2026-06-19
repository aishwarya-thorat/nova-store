export default function WhyChoose() {
    const features = [
        {
            title: "Top Brands",
            desc: "Nike, Adidas, Puma and more in one place",
            icon: "👟"
        },
        {
            title: "Best Deals",
            desc: "Compare prices across multiple brands",
            icon: "💰"
        },
        {
            title: "Fast Delivery",
            desc: "Get your sneakers delivered quickly",
            icon: "🚚"
        },
        {
            title: "Trusted Reviews",
            desc: "Verified ratings from real customers",
            icon: "⭐"
        },
    ];


    return (
        <section className="py-24 px-8 bg-black text-white">
            <h2 className="text-5xl font-bold text-center mb-16">
                Why Choose NOVA?
            </h2>

            <div className= "grid md:grid-cols-4 gap-8">
                {features.map((feature) => (
                    <div
                     key={feature.title}
                     className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover hover:border-yellow-500 transition"
                     >
                        <div className="text-5xl mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-3">
                            {feature.title}
                        </h3>

                        <p className="text-gray-400">
                            {feature.desc}
                        </p>
                        </div>
                ))}

            </div>
        </section>
    );
}