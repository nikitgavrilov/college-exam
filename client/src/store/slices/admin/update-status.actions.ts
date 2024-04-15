import { createAsyncThunk } from "@reduxjs/toolkit";
import { getStatements } from "../statements/statements.actions";

export const updateStatus = createAsyncThunk(
  "statement/update",
  async ({ id, status }: { id: string; status: number }, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`http://localhost:3001/api/v1/statements/${parseInt(id)}`, {
        method: "PUT",
        body: JSON.stringify({ status: String(status) }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Произошла ошибка при попытке обновить статус заявки");
      }
      dispatch(getStatements());
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
