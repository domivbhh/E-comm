import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:{
        user:{}
    },
    reducers:{
        loginUser:(state,action)=>{
            console.log(action.payload)
            state.user=action.payload
        },
        logoutUser:(state)=>{
            state.user=''
        }

    }
})


export default userSlice.reducer
export const{loginUser,logoutUser}=userSlice.actions 