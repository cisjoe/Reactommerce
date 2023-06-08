import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { productsReducer } from "./reducers/products-reducer";
import thunk from "redux-thunk";

export const store = createStore(productsReducer, applyMiddleware(thunk));
