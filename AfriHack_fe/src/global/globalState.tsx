import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  user: {} || null,
  adminToggle: false,
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
    adminToggled: (state: any) => {
      state.adminToggle = true;
    },
    adminChangedToggle: (state: any) => {
      state.adminToggle = false;
    },
  },
});

export const {
  toggled,
  changeToggle,
  setUser,
  logOut,
  adminChangedToggle,
  adminToggled,
} = globalState.actions;

export default globalState.reducer;
