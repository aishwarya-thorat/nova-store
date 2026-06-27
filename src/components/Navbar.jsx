import Link from "next/link";
export default function Navbar(){
    return(
        <nav className="fixed top-0 w-full flex justify-between items-center px-10 py-6 bg-black text-white z-50">
            <h1 className="text-2xl font-bold">
                NOVA
            </h1>
            
            <ul className="flex gap-8 text-gray-300">
                <li className="hover:text-white cursor-pointer">
                    <Link href="/">Home</Link>
                </li>
                <li className="hover:text-white cursor-pointer">
                    <Link href="/products">Products</Link>
                </li>
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">
                    <Link href="/cart">Cart</Link>
                </li>
            </ul>
        </nav>
    );
}