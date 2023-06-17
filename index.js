import {applyMiddleware, createStore,combineReducers} from 'redux'
import logger from 'redux-logger'
import axios from 'axios'
import thunk from 'redux-thunk'
    const store  = createStore(combineReducers({
AmountReducer,BonusReducer
    }),applyMiddleware(logger.default,thunk.default))

function AmountReducer(state={amount:1},action){
switch(action.type){
    case "init":
        return {amount: state.amount + action.payload}
    case "addition":
    return {amount:state.amount+action.payload}

    case "subtract" : 
    return {amount : state.amount-action.payload}
    
    default: return state
}

}


function BonusReducer(state={points:6},action){
    switch(action.type){
        case "addition" :
            if(action.payload>100){

                return {points:state.points+action.payload
                }
            }

            default : return state
    }
}


function addBonus(p){
return {type:"addition",payload:p}
}

function add(p){
   return {type:"addition",
   payload : p
}
};


function sub(p){
    return {type:"subtract",
    payload : p
 }
 }

 async function fetch(dispatch,getState){  //400
    const {data} = await axios.get("http://localhost:3000/accounts/2")
    console.log(data)
    dispatch({type:"init", payload:data.ammount})
}


// store.dispatch(fetch)
store.dispatch(add(200))
store.dispatch(addBonus(60))