import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:'product',
    initialState:{
        product:[]
    },
    reducers:{
        setProduct:(state,action)=>{
            state.product=action.payload.data
        },

    }
})




export default productSlice.reducer
export const{setProduct}=productSlice.actions