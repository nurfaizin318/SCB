import {combineReducers,createStore } from 'redux';
import DataReducer from '../Reducer/DataReducer';
import AuthReducer from '../Reducer/AuthReducer';
import FeedReducer from '../Reducer/FeedReducer';
import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const config = {
    key:'root',
    storage,
    whiteList:[DataReducer,AuthReducer]
  }
const rootReducer = combineReducers({DataReducer,AuthReducer,FeedReducer})

const persistedReducer = persistReducer(config, rootReducer)

export const store = createStore(persistedReducer);
export const persisStore = persistStore(store);

export default {store,persisStore}