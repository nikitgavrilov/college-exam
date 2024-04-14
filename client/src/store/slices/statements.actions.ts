import { createAsyncThunk } from "@reduxjs/toolkit";
import { IStatement } from "../../modules/IStatement";

const fetchStatements = async () => {
  const response = await fetch("http://localhost:3001/api/v1/statements");
  const data = response.json();
  return data;
};

export const getStatements = createAsyncThunk<IStatement[]>("statements/getAll", async (_, thunkApi) => {
  try {
    const data = await fetchStatements();
    return data;
  } catch (error) {
    thunkApi.rejectWithValue(error);
  }
});
