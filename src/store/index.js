import { configureStore, combineReducers } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice";
import locationReducer from "./locationSlice";
import emiReducer from "./emiSlice";

import {
  persistStore,
  persistReducer,
} from "redux-persist"
import storage from "redux-persist/lib/storage" // localStorage

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "location", "emi"]

}

const rootReducer = combineReducers({
  cart: cartReducer,
  location: locationReducer,
  emi: emiReducer,
})

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
export default store;