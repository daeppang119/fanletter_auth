// import { createStore, combineReducers } from "redux";
// import letters from "redux/modules/letters";
// import member from "redux/modules/member";
// import { devToolsEnhancer } from "redux-devtools-extension";

// const rootReducer = combineReducers({ letters, member });

// const store = createStore(rootReducer, devToolsEnhancer());

// export default store;

import { configureStore } from "@reduxjs/toolkit";

import memberSlice from "redux/modules/memberSlice";
import letterSlice from "../modules/letterSlice";

const store = configureStore({
  reducer: {
    letters: letterSlice,
    member: memberSlice,
  },
});

export default store;
