import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  user: {} || null,
};

const globalState = createSlice({
  name: "state",
  initialState,
  reducers: {
    toggled: (state: any) => {
      state.toggle = true;
    },
    changeToggle: (state: any) => {
      state.toggle = false;
    },
    setUser: (state: any, { payload }) => {
      state.user = payload;
    },
    logOut: (state: any) => {
      state.user = null;
    },
  },
});

export const { toggled, changeToggle, setUser, logOut } = globalState.actions;

export default globalState.reducer;
