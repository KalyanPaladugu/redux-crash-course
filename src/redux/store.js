import {applyMiddleware, combineReducers, createStore,compose} from 'redux';
import laptopReducer from './reducers/laptopReducer';
import mobileReducer from './reducers/mobileReducer';
import usersReducers from './reducers/usersReducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger'


const rootReducer=combineReducers({
    laptops:laptopReducer,
    mobiles:mobileReducer,
    users:usersReducers
})
const store=createStore(rootReducer,compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
applyMiddleware(thunk,logger)))

export default store;