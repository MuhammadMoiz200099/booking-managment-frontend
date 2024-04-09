import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/auth.slice";

const combinedRedurcers = combineReducers({
  auth: authReducer,
});


const rootReducer = (state, action) => {
  if (action.type === 'session/end') {
    state = undefined;
  }

  return combinedRedurcers(state, action);
};

export default rootReducer;