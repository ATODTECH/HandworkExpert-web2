import { persistStore, persistReducer } from "redux-persist";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userStore";
import localforage from "localforage";

const persistConfig = {
  key: "root",
  storage: localforage,
};

const reducers = combineReducers({
  user: UserReducer,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
