import {combineReducers,createStore } from 'redux';
import DataReducer from '../Reducer/DataReducer';
import { persistStore,persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // de
import {AsyncStorage} from '@react-native-community/async-storage';




const config = {
    key:'root',
    storage,
    whiteList:[DataReducer]
  }
const rootReducer = combineReducers({DataReducer} )

const persistedReducer = persistReducer(config, rootReducer)

export const store = createStore(persistedReducer);
export const persisStore = persistStore(store);

export default {store,persisStore}