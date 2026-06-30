"use client";
import { createContext, useEffect, useState} from "react";
export const CartContext = createContext();
export default function CartProvider({ children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingProduct = cart.find(
            (item) => item.id === product.id
        );

        if(existingProduct) {
            const updatedCart = cart.map((item) => {
                if(item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            });

            setCart(updatedCart);
        } else{
            setCart([
                ...cart,
                {
                    ...product,
                    quantity:1,
                },
            ]);
        }
        alert(`${product.name} added to cart successfully!`);
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cart.map((item) => {
            if(item.id === id){
                return{
                    ...item,
                    quantity:item.quantity-1,
                };
            }
            return item;
        })

        .filter((item) => item.quantity > 0);

        setCart(updatedCart);

    };

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
        <CartContext.Provider 
        value={{ 
            cart, 
            setCart,
            addToCart,
            decreaseQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}