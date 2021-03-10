import { combineReducers, createStore } from "redux";
import { burgerReducer } from "./Burger/burgerReducer";

const rootReducer = combineReducers({
  burgerReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
