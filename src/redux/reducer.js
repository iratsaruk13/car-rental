import { reducerCars } from "./cars/sliceCars";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"],
  };

  const persistedReducer = persistReducer(authPersistConfig, reducerCars);

  export const reducer = {
    cars: persistedReducer,
  }
