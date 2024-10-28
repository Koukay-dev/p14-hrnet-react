import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { employeeSlice } from "../Slices/employeeSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";


const persistConfig = {
    key: 'root',
    storage
}


const persistedReducer = persistReducer(persistConfig, combineReducers({
    employee: employeeSlice.reducer,
}));

export const store = configureStore({
    initialState: {},
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
            }
        })
});

export const persistor = persistStore(store);

