import { createContext, useState, useEffect } from "react";

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem) {
       return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1} :
        cartItem)
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity -1} :
        cartItem
    );
}

export const CartContext = createContext({
    cartItems:[],
    removeItem: () => {},
    addItem: () => {},
    cartTotal:0,
    cartTotalPrice:0,
});

export const CartProvider = ({ children }) => {
    


    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);
    
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item))
    const addItem = item => setCartItems(addItemToCart(cartItems, item));

    


    useEffect(() => {
        
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems]);

      useEffect(() => {
        const newCartTotalPrice = cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
              accumalatedQuantity + cartItem.quantity * cartItem.price,
            0
        );

        const newCartCount = cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
              accumalatedQuantity + cartItem.quantity,
            0
        );
        setCartTotalPrice(newCartTotalPrice)
        setCartTotal(newCartCount);

      }, [cartItems])
    
      useEffect(() => {
        const data = localStorage.getItem('cartItems');
        if(data) setCartItems(JSON.parse(data))

      }, []);


    const value = { cartItems, removeItem, addItem, cartTotal, cartTotalPrice };


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}