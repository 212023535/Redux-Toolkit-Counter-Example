import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice';

export const store = configureStore({ 
    reducer: {
        // connect the slice to the store so that it can be accessed from anywhere within the app through the Provider
        counter: counterReducer
    } 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;