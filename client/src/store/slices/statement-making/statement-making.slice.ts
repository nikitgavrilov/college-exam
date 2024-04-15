import { createSlice } from "@reduxjs/toolkit";
import { createStatement } from "./statement-making.actions";

interface StatementsState {
  message: string | null | unknown;
}

const initialState: StatementsState = {
  message: null,
};

export const statementMaking = createSlice({
  name: "statement-making",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createStatement.pending, (state) => {
      state.message = null;
    });
    builder.addCase(createStatement.fulfilled, (state, action) => {
      state.message = action.payload.message;
    });
    builder.addCase(createStatement.rejected, (state, action) => {
      state.message = action.payload;
    });
  },
});
