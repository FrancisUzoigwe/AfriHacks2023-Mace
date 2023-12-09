import { configureStore } from "@reduxjs/toolkit";
import {
  PERSIST,
  REGISTER,
  REHYDRATE,
  PAUSE,
  PURGE,
  FLUSH,
  persistReducer,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import rootReducer from "./globalState";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, REGISTER, REHYDRATE, PAUSE, PURGE, FLUSH],
      },
    }),
});
