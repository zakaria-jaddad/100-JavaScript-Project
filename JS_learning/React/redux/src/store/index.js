import { createStore, combineReducers, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import { bankReducer } from "./reducers/bank-reducers"
import { productsReducer } from "./reducers/products-reducer"

const appReducer = combineReducers({
    bank: bankReducer, 
    products: productsReducer   
})

export const store = createStore(appReducer, applyMiddleware(thunk));