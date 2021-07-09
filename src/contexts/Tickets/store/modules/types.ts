export interface ITicket {
  id: number;
  number: string;
  type: string;
  status: string;
  is_attending?: boolean;
}
export interface ITicketItem {
  ticket: ITicket;
}

export interface ITicketState {
  tickets: ITicketItem[];
}