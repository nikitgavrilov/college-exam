import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { statementsSlice } from "./slices/statements/statements.slice";
import { statementMakingSlice } from "./slices/statement-making/statement-making.slice";

const rootReducer = combineReducers({
  statements: statementsSlice.reducer,
  statementMaking: statementMakingSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
