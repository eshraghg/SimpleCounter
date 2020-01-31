import { ADD_ONE } from "../actions/actionTypes";
import { combineReducers } from "redux";

const INITAL_STATE = 0;

const addOneReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case ADD_ONE:
      return state + 1;
    default:
      return state;
  }
};

export default combineReducers({
  num: addOneReducer
});
