import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  ActionTypes,
  SET_TICKETS
} from "./actions";
import { Store } from "../redux/types";



// Redux implementation
function ticketReducer(
  state: Store = {
    tickets: [],
    ticket: [],
    pageTotal: 0,
    ticketsDataType: [],
    ticketNumber: "",
  },
  action: ActionTypes
) {
  switch (action.type) {
    case SET_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };

    default:
      return state;
  }
}

const store = createStore(ticketReducer, applyMiddleware(thunk));

export default store;