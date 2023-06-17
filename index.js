import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

const requestFulfilled = "requestFulfilled";
const requestReject = "requestReject";
const requestPending = "requestPending";

const store = createStore(
  combineReducers({
    AmountReducer,
    BonusReducer,
  }),
  applyMiddleware(logger.default, thunk.default)
);

function AmountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    // HANDLING PROMISES OF AXIOS

    case requestFulfilled:
      return { amount: state.amount + action.payload, loading: false };
    case requestPending:
      return { ...state, loading: true };
      return { amount: state.amount + action.payload };
    case requestReject:
      return { ...state, error: action.payload, loading: false };

    // -----------------------------------------------------------
    case "init":
      return { amount: state.amount + action.payload };
    case "addition":
      return { amount: state.amount + action.payload };

    case "subtract":
      return { amount: state.amount - action.payload };

    default:
      return state;
  }
}

function BonusReducer(state = { points: 6 }, action) {
  switch (action.type) {
    
    // EXTRA REDUCER
    case "addition":
      if (action.payload > 100) {
        return { points: state.points + 1 };
      }
    default:
      return state;
  }
}

function addBonus(p) {
  return { type: "addition", payload: p };
}

function add(p) {
  return { type: "addition", payload: p };
}

function sub(p) {
  return { type: "subtract", payload: p };
}

async function fetch(dispatch, getState) {
  //400
  try {
    dispatch(Pending());
    const { data } = await axios.get("http://localhost:3000/accounts/2");
    dispatch(Fulfilled(data));
  } catch (error) {
    dispatch(Reject(error.code));
  }
}

function Fulfilled(data) {
  return { type: requestFulfilled, payload: data.ammount };
}

function Reject(err) {
  return { type: requestReject, payload: err };
}

function Pending() {
  return { type: requestPending };
}

// store.dispatch(fetch)
// store.dispatch(add(200))
// store.dispatch(addBonus(60))
store.dispatch(fetch);
