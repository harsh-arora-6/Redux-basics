import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated:false
}
const authSlice = createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
        // in this behind the scenes redux toolkit creates a new state object copies other entries which are not modified and overrides the ones which are modified
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;
