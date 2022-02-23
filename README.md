### Redux-crash-course

+ Redux is a state Management JS Library
+ A Predictible(able to be known) state container(global state for entire app) for JS APPS
+ Redux was created by Dan Abramov and Andrew clark 2015

+ ![Redux flow](https://miro.medium.com/max/919/1*BcmtHcMHN6PT7IniIWniHg.png)
+ Flux and Mobx(supports multiple storess) are similar libraries like redux
+ To manage localstate in every component is difficault . Better to create gloabal state


+ core components
    - store  (initialState)
    - action (type of action)
    - reducer (accepts state and action as argument based upon this it will compare state and execute result)

```
const initialSate={numOfLaptops:100}
const reducer=(state=initialSate,action)=>{
    if(action.type ==="BUY_LAPTOP){
        return {numOfLaptops:state.numOfLaptops-1 }
    }

    else {
     return state;
 }
}
```
+ For every updation to connect store or sync store with application we hve to `subscribe` function.
+ Finally you have to dispatch a function
+ To create rootReducer for all reucers in your application use `combineReducer`

+ Middleware
    - usually middleware used for logging,performing asynchronous operations operations etc...s
    - redux-logger
    - `npm i redux-logger`
    - import it at top level and import appylMiddleware 
    - in the store creation pass logger for applyMiddleware
    - in the console we can check status of state with comparison
    - Async operations
    - `npm i redux-thunk`