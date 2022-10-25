import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart, removeItemFromCart } from './cart.utils';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      cartItems: [],
    },
    reducers: {
      addItem: (state, action) => {
        return {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload) 
        }
        
      },
      removeItem: (state, action) => {
       return {
        ...state,
        cartItems:removeItemFromCart(state.cartItems, action.payload)
       }
        
      },
      clearCart:(state) => {
        return {
          ...state,
          cartItems:[]
        }
        
      }

    }
  })
  
  // Action creators are generated for each case reducer function
  export const { addItem, removeItem, clearCart } = cartSlice.actions
  
  export default cartSlice.reducer