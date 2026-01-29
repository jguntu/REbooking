import { createSlice } from "@reduxjs/toolkit";

// 👇 Load from localStorage on app start
const savedState = localStorage.getItem("selectedState");

const initialState = {
  state: savedState || "Tamil Nadu",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.state = action.payload;

      // 👇 Persist to localStorage
      localStorage.setItem("selectedState", action.payload);
    },
    clearLocation: (state) => {
      state.state = "";
      localStorage.removeItem("selectedState");
    },
  },
});

export const { setLocation, clearLocation } = locationSlice.actions;
export default locationSlice.reducer;
