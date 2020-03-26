import {combineReducers,createStore } from 'redux';
import TabReducer from '../Reducer/TabReducer';
import ModalReducer from '../Reducer/ModalReducer';
import InsertReducer from '../Reducer/InsertReducer';

const rootReducer = combineReducers({
 Tab :TabReducer,
 Modal:  ModalReducer,
 Insert : InsertReducer
})

const Store = createStore(rootReducer);

export default Store;