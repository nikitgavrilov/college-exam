import { createSlice } from "@reduxjs/toolkit";
import { IStatement } from "../../../models/IStatement";

interface StatementsState {
  statements: IStatement[];
}

const initialState: StatementsState = {
  statements: [],
};

export const updateStatusSlice = createSlice({
  name: "update-status",
  initialState,
  reducers: {},
});
