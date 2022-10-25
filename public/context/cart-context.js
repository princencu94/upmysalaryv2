import { createContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";



export const CartContext = createContext({
    cartItems:[]
});

export const CartProvider = ({ children }) => {
    
    const reduxCartItems = useSelector(state => state.cart.cartItems);

    console.log('cartContext', reduxCartItems);

    const [cartItems, setCartItems] = useState({id:1, name:"prince"});

      useEffect(() => {
        setCartItems(...reduxCartItems);
      }, [cartItems])
    



    const value = { cartItems };


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}