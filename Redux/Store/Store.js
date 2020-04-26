import {combineReducers,createStore } from 'redux';
import TabReducer from '../Reducer/TabReducer';
import ModalReducer from '../Reducer/ModalReducer';
import DataReducer from '../Reducer/DataReducer';

const rootReducer = combineReducers({
 Tab :TabReducer,
 Modal:  ModalReducer,
 Data : DataReducer,
})

const Store = createStore(rootReducer);

export default Store;