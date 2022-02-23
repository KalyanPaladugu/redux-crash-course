const { createStore, combineReducers,applyMiddleware } = require("redux")
const logger=require('redux-logger').default;
const BUY_LAPTOP="BUY_LAPTOP";
const BUT_MOBILE="BUY_MOBILE";
const initialState=
{numOfLaptops:100}
const initialMobiles={
    numOfMobiles:100
}

const buyLaptop=()=>{
    return {type:BUY_LAPTOP}
}

const buymobile=()=>{
    return {type:BUT_MOBILE}
}

const laptopReducer=(state=initialState,action)=>{

//  if(action.type==="BUY_LAPTOP"){
//      return {numOfLaptops:numOfLaptops-1}
//  }
//  else {
//      return state;
//  }
    switch(action.type){
        case BUY_LAPTOP:
            return {numOfLaptops:state.numOfLaptops-1}
        default:
            return state;
    }
}

const mobileReducer=(state=initialMobiles,action)=>{

        switch(action.type){
            case BUT_MOBILE:
                return {numOfMobiles:state.numOfMobiles-1}
            default:
                return state;
        }
    }

// const store=createStore(reducer);
// console.log(store);
const reducer=combineReducers({laptops:laptopReducer,mobiles:mobileReducer})
const store=createStore(reducer,applyMiddleware(logger))
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(buyLaptop())
store.dispatch(buyLaptop())
store.dispatch(buyLaptop())
store.dispatch(buymobile())
store.dispatch(buymobile())