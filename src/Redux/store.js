import { createStore } from "redux";
import ReducerToList from "./Reducers/ReducerToList";

const store = createStore(
  ReducerToList,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
