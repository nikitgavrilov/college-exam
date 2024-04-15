import { createAsyncThunk } from "@reduxjs/toolkit";
import { IStatement } from "../../../modules/IStatement";

export const createStatement = createAsyncThunk(
  "statement/create",
  async (statement: Omit<IStatement, "id" | "state">, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/statements", {
        method: "POST",
        body: JSON.stringify(statement),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
