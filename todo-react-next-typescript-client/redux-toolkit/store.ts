import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';


// persist config
const persistConfig = {
     key: 'root',
     storage,
};

// persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducers);

// store
export const store = configureStore({
  reducer: persistedReducer
});

// persist store
export let persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
