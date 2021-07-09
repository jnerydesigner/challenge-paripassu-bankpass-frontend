export interface Ticket {
  id: number;
  number: string;
  type: string;
  status: string;
  is_attending?: boolean;
}

export interface Store {
  tickets: Ticket[];
  ticketsDataType: Ticket[];
  ticket: TicketData[];
  pageTotal: number;
  ticketNumber: TicketNumber;
}

export interface TicketData {
  id?: number;
  number?: string;
  type: string;
  status: string;
  is_attending: boolean;
}

export type TicketNumber = string;