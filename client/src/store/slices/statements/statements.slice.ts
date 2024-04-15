import { createSlice } from "@reduxjs/toolkit";
import { IStatement } from "../../../models/IStatement";
import { getStatements } from "./statements.actions";

interface StatementsState {
  isLoading: boolean;
  error: string | null | unknown;
  statements: IStatement[];
}

const initialState: StatementsState = {
  isLoading: false,
  error: null,
  statements: [],
};

export const statementsSlice = createSlice({
  name: "statements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStatements.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.statements = [];
    });
    builder.addCase(getStatements.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.statements = action.payload;
    });
    builder.addCase(getStatements.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
      state.statements = [];
    });
  },
});
