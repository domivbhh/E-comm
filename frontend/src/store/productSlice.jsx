import { createSlice } from "@reduxjs/toolkit";



//creating product slice 
const productSlice=createSlice({
    name:'product',
    initialState:{
        product:[],
        pages:0,
        
    },
    reducers:{
        setProduct:(state,action)=>{
            state.product=[...state.product,action.payload]
        },
        setPages:(state)=>{
            if(state.pages<=5){
                state.pages=state.pages+1
            }
        },
        setProductPages:(state)=>{
             if (state.productpages <= 5) {
               state.productpages = state.productpages + 1;
             }
        }

    }
})




export default productSlice.reducer
export const{setProduct,setPages}=productSlice.actions