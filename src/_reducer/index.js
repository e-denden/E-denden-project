import { combineReducers } from "redux";
import userInfoReducer from "./modules/userInfoReducer";
import loanListReducer from "./modules/loanListReducer";
import loanListFilterReducer from "./modules/loanListFilterReducer";

const mainReducer = combineReducers({
  userInfoReducer,
  loanListReducer,
  loanListFilterReducer,
});
export default mainReducer;