import { createSlice } from "@reduxjs/toolkit";

import { baseCurrencyThunk } from "./operations";

const currencySlice = createSlice({
  name: "currency",
  initialState: { baseName: "" },
  reducers: {
    setBaseCurrency(state, { payload }) {
      state.baseName = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(baseCurrencyThunk.fulfilled, (state, { payload }) => {
      state.baseName = payload;
    });
  },
});
export const { setBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
