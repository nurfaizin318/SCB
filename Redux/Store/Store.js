import {combineReducers,createStore } from 'redux';
import TabReducer from '../Reducer/TabReducer'

const rootReducer = combineReducers({
 TabReducer
})

const Store = createStore(rootReducer);

export default Store;