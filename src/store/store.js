import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice';
import authReducer from './AuthSlice'
// const counterReducer = (state = initState, action) => {
//     if (action.type === 'increase') {
//     return { ...state, value: state.value + action.payload };
//     }
//     if (action.type === 'decrease') {
//     return {...state, value:state.value - action.payload}
//     }


//     if (action.type === "toggleCounter") {
//       return { ...state, showCounter: !state.showCounter };
//     }


//     return state;
// };
//app init -> run store -> action -> counter reducer -> 0



// ==================  REDUX TOOLKIT  =======================


export const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
