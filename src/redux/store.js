import {createStore } from 'redux'
import testReducer from './reducers/test'



const store = createStore(testReducer)

export default store;