import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";

export interface Ticket {
  id: number;
  number: string;
  type: string;
  status: string;
}

const initialState: Ticket[] = [
  {
    id: 1,
    number: 'P5432',
    type: 'P',
    status: 'EA'
  },
  {
    id: 2,
    number: 'P5432',
    type: 'P',
    status: 'EA'
  }
];


const ticket = createSlice({
  name: 'ticket',
  initialState: initialState,
  reducers: {
    addTicket(state) {
      state = [...state]
    },
    listTicket(state) {
      console.log(state);
    }
  }
});


export const { addTicket, listTicket } = ticket.actions;

export default ticket.reducer;