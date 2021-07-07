import { PayloadAction, createSlice } from '@reduxjs/toolkit';


interface Ticket {
  id: number;
  number: string;
  type: string;
  status: string;
}


const initialState: Ticket[] = [
  {
    id: 1,
    number: "P2346",
    type: "P",
    status: "sema"
  }
];


export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    addTicket: (state, action: PayloadAction<Ticket>) => {
      state = [...state, action.payload];
    }
  },
})

export const { addTicket } = ticketSlice.actions;
export default ticketSlice.reducer
