import { createSlice } from "@reduxjs/toolkit";

//to track the user authentication 
const initialState = {
    status: false ,       //no user authenticated
    userData: null
}
const authSlice = createSlice({    //slice always take 3 parameters
    name: "auth",
    initialState,
    reducer:{ 
        login: (state,action)=>{
            state.status=true;      //as soon as status get true we can access user data
            state.userData=action.payload.userData;
        },     
        logout : (state)=>{
            state.state=false;
            state.userData=null;
        }
    }

})

export const{login,logout} = authSlice.actions;
export default authSlice.reducer;