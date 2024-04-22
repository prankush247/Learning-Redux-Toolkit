import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
            // console.log("UserSlice:",action.payload)
        },
        removeUser(state,action){
            state.splice(action.payload,1)
        },
        deleteUsers(state,action){
            console.log("::::::::::")
           return state = []
           
        }
    }
})

console.log(userSlice.actions)

export default userSlice.reducer
export const {addUser,removeUser,deleteUsers} = userSlice.actions