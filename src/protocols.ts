import { TicketStatus } from "@prisma/client";

export type ApplicationError = {
  name: string;
  message: string;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};

export type ViaCEPAddressError = {
  error: boolean;
};

export type AddressEnrollment = {
  logradouro: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
};

export type CEP = {
  cep: string;
};

export type createTicket = {
  ticketTypeId: number;
}

export type newTicket = {
  ticketTypeId: number,
  enrollmentId: number,
  status: TicketStatus
}

export type paymentBody = {
	ticketId: number,
	cardData: cardData
}

export type cardData = {
  issuer: "VISA" | "MASTERCARD",
  number: number,
  name: string,
  expirationDate: Date,
  cvv: number
}