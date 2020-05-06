import {combineReducers,createStore } from 'redux';
import DataReducer from '../Reducer/DataReducer';

const rootReducer = combineReducers({
DataReducer,
})

const Store = createStore(rootReducer);

export default Store;