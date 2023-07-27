import { combineReducers } from "@reduxjs/toolkit";

import global from "./global";
import home from "./home";

const rootReducer = combineReducers({
  global,
  home
});

export default rootReducer;
