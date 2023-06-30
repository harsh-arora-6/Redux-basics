import { createStore } from "redux";
const initialState = { counter: 0, showCounter: true };
const countReducer = (state = initialState, action) => {
    // Never mutate a state , it could lead to unpredicatable bugs
  if (action.type === "increment") {
    /**
     * Don't do like 
    //  * state.counter++ wrong way 
     * return state 
     */
    return { counter: state.counter + 1,showCounter:state.showCounter };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1,showCounter:state.showCounter };
  }
  if (action.type === "toggle") {
    return { counter: state.counter,showCounter:!state.showCounter };
  }
  return state;
};

const store = createStore(countReducer);

export default store;
