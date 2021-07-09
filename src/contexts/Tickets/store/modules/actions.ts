import { ITicket } from "./types";

export function addTicketFromTrable(ticket: ITicket) {
  return {
    type: 'ADD_TICKET_FROM_TABLE',
    payload: {
      ticket
    }
  }
}