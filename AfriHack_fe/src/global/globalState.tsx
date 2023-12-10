import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  user: {} || null,
  adminToggle: false,
  buyer: false,
  create: false,
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
    buyerToggle: (state: any) => {
      state.buyer = true;
    },
    buyerChangedToggle: (state: any) => {
      state.buyer = false;
    },
    adminToggled: (state: any) => {
      state.adminToggle = true;
    },
    adminChangedToggle: (state: any) => {
      state.adminToggle = false;
    },
    createToggle: (state: any) => {
      state.create = true;
    },
    createChangedToggle: (state: any) => {
      state.create = false;
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
  buyerToggle,
  buyerChangedToggle,
  createChangedToggle,
  createToggle,
} = globalState.actions;

export default globalState.reducer;
