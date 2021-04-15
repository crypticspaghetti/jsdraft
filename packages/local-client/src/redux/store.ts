import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { persistMiddleware } from "./middlewares/persist";

export const store = createStore(
  reducers,
  {},
  applyMiddleware(persistMiddleware, thunk)
);
