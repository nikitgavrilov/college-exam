import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { statementsSlice } from "./slices/statements.slice";

const rootReducer = combineReducers({
  statements: statementsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
