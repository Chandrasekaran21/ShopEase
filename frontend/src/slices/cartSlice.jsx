import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) :
{cartItem: []}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action)=>{

            const item = action.payload;

            const existItem = state.cartItem.find((a)=> a._id === item._id);

            if(existItem){

                state.cartItem = state.cartItem.map((a)=>(
                    a._id === existItem._id ? item : a
                ))
            } else{

                state.cartItem = [...state.cartItem, item];
            }

            // calculate item price

            state.itemPrice = state.cartItem.reduce((acc, item)=>(

                acc + item.price * item.qty

            ),0)

            // shipping price (if 100 above free)

            state.shippingPrice = (state.itemPrice > 100) ? 0 : 20;

            // GST price

            state.taxPrice = 0.18 * state.itemPrice; 

            // Total price

            state.totalPrice = state.itemPrice + state.shippingPrice + state.taxPrice

            localStorage.setItem("cart", JSON.stringify(state))
        },

        removeFromCart: (state, action) =>{

            state.cartItem = state.cartItem.filter((item)=> item._id !== action.payload);

            // calculate item price

            state.itemPrice = state.cartItem.reduce((acc, item)=>(

                acc + item.price * item.qty

            ),0)

            // shipping price (if 100 above free)

            state.shippingPrice = (state.itemPrice > 100) ? 0 : 20;

            // GST price

            state.taxPrice = 0.18 * state.itemPrice; 

            // Total price

            state.totalPrice = state.itemPrice + state.shippingPrice + state.taxPrice

            localStorage.setItem("cart", JSON.stringify(state))
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;