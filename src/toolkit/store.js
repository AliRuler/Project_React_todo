import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoSlice from "./slices/todo.slice";

const persistConfig = {
    key: "myApp",
    storage
};

const rootReducer = combineReducers({
    cart: todoSlice, 
});

const presistedReduer = persistReducer(persistConfig, todoSlice);

const store = configureStore({
    reducer: presistedReduer,
    middleware: []
});

export const persistor = persistStore(store);

export default store;

