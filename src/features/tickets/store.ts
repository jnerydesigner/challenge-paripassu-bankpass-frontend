import { configureStore } from '@reduxjs/toolkit';
import { ticketSlice } from '.';


export const store = configureStore({
  reducer: {
    tickets: ticketSlice.reducer
  }
})

type RootState = ReturnType<typeof store.getState>;

export const selectTicket = (state: RootState) => state.tickets;