import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  cart: [] as any,
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
    addToCart: (state: any, { payload }) => {
      let check = state.cart.findIndex((el: any) => el._id === payload._id);

      if (check >= 0) {
        state.cart[check].QTY += 1;
      } else {
        const data = {
          ...payload,
          QTY: 1,
        };
        state.cart.push(data);
      }
    },

    removeFromCart: (state: any, {payload}) => {
      state.cart = state.cart.filter((el:any) => {
        return el._id !== payload._id
      });
    },

    removeQTYfromCart: (state: any, { payload }) => {
      let check = state.cart.findIndex((el: any) => el._id !== payload._id);

      if (state.cart[check].QTY === 1) {
        state.cart = state.cart.filter((el: any) => el._id !== payload._id);
      }
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
  addToCart,
  removeFromCart,
  removeQTYfromCart,
} = globalState.actions;

export default globalState.reducer;
