import { Router } from "express";
import { validateBody, authenticateToken } from "@/middlewares";
import { createTicketSchema } from "@/schemas/tickets-schemas";
import { createTicket, getTickets, getTicketsType } from "@/controllers";

const ticketsRouter = Router();

ticketsRouter.get('/',authenticateToken, getTickets);
ticketsRouter.get('/types',authenticateToken, getTicketsType);
ticketsRouter.post('/',authenticateToken, validateBody(createTicketSchema), createTicket);

export { ticketsRouter };
