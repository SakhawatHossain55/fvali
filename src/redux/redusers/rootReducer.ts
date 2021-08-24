import { combineReducers } from "redux";
import cart from "./cartReduser";
const rootReducer = combineReducers({
  cart,
});

export type AppType = ReturnType<typeof rootReducer>;

export default rootReducer;
