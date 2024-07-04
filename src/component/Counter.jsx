import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

//actions
import { increase, decrease } from "../store/CounterSlice";
import { logIn, logOut } from "../store/AuthSlice";


function Counter() {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  
  const counterHandler = useCallback(  (type, value) => {
      if (type === "increase") {
        dispatch(increase(value));
      } else {
        dispatch(decrease(value));
      }
    }, [dispatch] )
    
      useEffect(() => {
        counterHandler("increase", 3);
      }, [counterHandler]);

  const isLoggedIn = () => {
    return globalState.auth.isLoggedIn
  }

  const loginHandler = (status) => {
    if (status) {
      dispatch(logOut(7));
    } else {
      dispatch(logIn());
    }
  }


  return (
    <>
      <div className="App">
        <h1>Hello Redux Basic</h1>

        {isLoggedIn() && (
          <>
            <div className="counter">Counter: {globalState.counter.value}</div>
            <div className="btns">
              <button
                className="btn"
                onClick={() => counterHandler('increase',3)}  >
                increase +
              </button>
              <button
                className="btn"
                onClick={() => counterHandler('decrease',-2)}  >
                decrease -
              </button>
            </div>
          </>
        )}

        <div>
          <button className="btn" onClick={() => loginHandler(isLoggedIn())}>
            {isLoggedIn() ? "logout" : "login"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;

// const increase = () => {
//   dispatch({ type: "increase", payload: 3 }); //    const action = { type: "increase", payload: 3 };
// };
// const decrease = () => {
//   dispatch({ type: "decrease", payload: -4 }); //    const action = { type: "decrease", payload: -4 };
// };

// const handleCounterValue = (value) => {
//   if (value < 1) return "no";
//   return value;
// };

// const counterOperation = useCallback(
//   (type, payload) => {
//     dispatch({ type, payload }); //    const action = { type: "increase", payload: 3 };
//   },
//   [dispatch]
// );

// useEffect(() => counterOperation("increase", 10), [counterOperation]);

// const toggleCounter = () => {
//   dispatch({ type: "toggleCounter" });
// };

//  const counterState = useSelector((state) => {
//     if (state.value < 1) {
//       return "no";
//     }
//    return state.value;
// });
//=================================================== */

// <button  className="btn"  onClick={() => counterOperation("increase", 3)}  > increase +  </button>
// <button  className="btn"  onClick={() => counterOperation("decrease", -1)} >  decrease - </button>
