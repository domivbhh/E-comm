import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:{
        user:{}
    },
    reducers:{
        loginUser:(state,action)=>{
            state.user=action.payload
        },
        logoutUser:(state)=>{
            state.user=''
        }

    }
})


export default userSlice.reducer
export const{loginUser,logoutUser}=userSlice.actions 