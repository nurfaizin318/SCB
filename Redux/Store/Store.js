import {combineReducers,createStore } from 'redux';
import DataReducer from '../Reducer/DataReducer';
import AuthReducer from '../Reducer/AuthReducer'
import { persistStore,persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // de

const config = {
    key:'root',
    storage,
    whiteList:[DataReducer,AuthReducer]
  }
const rootReducer = combineReducers({DataReducer,AuthReducer} )

const persistedReducer = persistReducer(config, rootReducer)

export const store = createStore(persistedReducer);
export const persisStore = persistStore(store);

export default {store,persisStore}