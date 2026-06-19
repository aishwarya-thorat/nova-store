export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-white px-10 py-16">
            <div className="grid md:grid-cols-3 gap-12">
                <div>
                    <h2 className="text-3xl font-bold text-yellow-500">
                        NOVA
                    </h2>

                    <p className="text-gray-400 mt-4">
                        Discover premium sneakers from the world's leading brands.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Quick Links
                    </h3>

                    <ul className="space-y-3 text-gray-400">
                        <li>Home</li>
                        <li>Brands</li>
                        <li>Products</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Follow Us
                    </h3>

                    <ul className="space-y-3 text-gray-400">
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-zinc-800 mt-12 pt-6 text-center text-gray-500">
                © 2026 NOVA. All rights reserved.
            </div>
        </footer>
    );
}