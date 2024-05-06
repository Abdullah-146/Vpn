import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import loginReducer, { logout as userLogout } from "./slice/user/userSlice";
// import planReducer , {logout as planLogout} from "./slice/plan/planSlice";
// import subscriptionReducer, {logout as subscriptionLogout} from "./slice/subscription/subscriptionSlice";
// import serverReducer , {logout as serverLogout} from "./slice/server/serverSlice";
// import deviceReducer, {logout as deviceLogout} from "./slice/device/deviceSlice";
import faqReducer, { logout as faqLogout } from "./slice/faq/faqSlice";

const rootReducer = combineReducers({
  user: loginReducer,
  // plan: planReducer,
  // subscription: subscriptionReducer,
  // server: serverReducer,
  // device: deviceReducer,
  faq: faqReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const logout = () => (dispatch) => {
  dispatch(userLogout());
  // dispatch(planLogout());
  // dispatch(subscriptionLogout());
  // dispatch(serverLogout());
  // dispatch(deviceLogout());
  dispatch(faqLogout());
};

export default store;
