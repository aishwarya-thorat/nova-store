"use client";
import { createContext, useEffect, useState} from "react";
export const CartContext = createContext();
export default function CartProvider({ children}) {
    const [cart, setCart] = useState([]);

    useEffect(() => {

        const savedCart = 
    localStorage.getItem("cart");

        if(savedCart) {
            setCart(JSON.parse(savedCart));
        }

    }, []);

    useEffect(() => {
        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, setCart}}>
            {children}
        </CartContext.Provider>
    );
}