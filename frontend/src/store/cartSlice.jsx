import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[],
        total:0
    },
    reducers:{
        addToCart:(state,action)=>{
                  
            const index=state.cart.findIndex((ele)=>ele._id===action.payload._id)
    
          
            if(index>-1){
            state.cart[index].qty+=1;
            
            // const items = state.cart[index].price*state.cart[index].qty;
            state.total += state.cart[index].price;
            
            }
            else{
              state.cart = [...state.cart, { ...action.payload, qty: 1 }];
              state.total+=action.payload.price
              
            }
            
        },
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
             
            
        }
         
            

        }
    }
)



export const{addToCart,deleteCart}=cartSlice.actions
export default cartSlice.reducer