import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { sizeReducers } from '../store/sizeReducer'

const rootReducer = combineReducers({
    size: sizeReducers,
    // score: scoreReducer,
})

export let store = configureStore({
    reducer: rootReducer,
});