import { Reducer } from "redux";
import { ITicketState } from "./types";

const INITIAL_STATE: ITicketState = {
  tickets: []
}

const ticket: Reducer<ITicketState> = (state, action) => {
  console.log(state)
  return INITIAL_STATE;

}

export default ticket;