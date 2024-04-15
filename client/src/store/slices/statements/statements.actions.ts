import { createAsyncThunk } from "@reduxjs/toolkit";
import { IStatement } from "../../../models/IStatement";

export const getStatements = createAsyncThunk<IStatement[]>("statements/get-all", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/statements");
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error: any) {
    rejectWithValue(error.message);
  }
});
