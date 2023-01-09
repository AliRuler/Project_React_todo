import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import filterSlice from "./slices/filter.slice";
import todoSlice from "./slices/todo.slice";
import logger from 'redux-logger'

const persistConfig = {
    key: "myApp",
    storage
};

const rootReducer = combineReducers({
    todo: todoSlice, 
    filterTodos: filterSlice,
});

const presistedReduer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: presistedReduer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export const persistor = persistStore(store);

export default store;

