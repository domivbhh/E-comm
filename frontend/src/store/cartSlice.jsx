import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[],
        total:0,
        totalQty:0
    },
    
    reducers:{
    // cart item adding reducer function
        addToCart:(state,action)=>{          
            const index=state.cart.findIndex((ele)=>ele._id===action.payload._id)          
            if(index>-1){
            state.cart[index].qty+=1;
            state.total += state.cart[index].price;
            }
            else{
              state.cart = [...state.cart, { ...action.payload, qty: 1 }];
              state.total+=action.payload.price
              
            }
            state.totalQty+=1
                toast.success("item added");

            
        },

        //cart item delete reducer function
        deleteCart:(state,action)=>{
            const index = state.cart.findIndex(
              (ele) => ele._id === action.payload._id
            );

            console.log(index)
            let price = state.cart[index].price;
            state.total -= price;
            if(state.cart[index].qty===1){
                state.cart.splice(index,1)
            }
            else{
                state.cart[index].qty-=1
               
            }          
            state.totalQty-=1
            
        },

        //removing entire cart item
         removeCart:(state,action)=>{
                    console.log(action.payload)
                state.totalQty -= state.cart[action.payload].qty;
                state.total-=state.cart[action.payload].qty*state.cart[action.payload].price
                state.cart.splice(action.payload,1)
                toast.success('one item deleted')
            }
        }
    }
)



export const{addToCart,deleteCart,removeCart}=cartSlice.actions
export default cartSlice.reducer