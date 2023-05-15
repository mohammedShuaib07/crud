import {createSlice} from '@reduxjs/toolkit'

const initialState=[
  // {id:1, name:"shuaib",email:"shuain@gmail.com"},
  // {id:1, name:"mohammed",email:"mohammed@gmail.com"}
]
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
     addUser:(state,action)=>{
          state.push(action.payload)
     },
     edituser:(state,action)=>{
     const{id,name,email}= action.payload;
     const existingUser=state.find(user=>user.id === id);
     if(existingUser){
      existingUser.name=name;
      existingUser.email=email;
     }
     },
     deleteuser:(state,action)=>{
     const{id}= action.payload;
     const existingUser=state.find(user=>user.id === id);
     if(existingUser){
       return state.filter(user => user.id !== id)
     }
     },
    }
})

export const {addUser,edituser,deleteuser}=userSlice.actions;

export default userSlice.reducer;