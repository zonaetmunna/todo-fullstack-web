import { combineReducers } from "@reduxjs/toolkit";
import { todoSlice } from "./slices/todoSlice";



const rootReducer = combineReducers({
  todos:todoSlice,
  // visibilityFilter
});
export default rootReducer;


export type RootState = ReturnType<typeof rootReducer>;
// export type RootState = ReturnType<typeof store.getState>;
