import { createSlice,configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        // in this behind the scenes redux toolkit creates a new state object copies other entries which are not modified and overrides the ones which are modified
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.payload;
        },
        toggle(state){
            state.showCounter = !state.showCounter;
        }
    }
})
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


const store = configureStore({
    reducer:{ counter: counterSlice.reducer, auth:authSlice.reducer}
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
