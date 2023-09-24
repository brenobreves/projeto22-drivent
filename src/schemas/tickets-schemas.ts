import Joi from "joi";
import { createTicket } from "@/protocols";

export const createTicketSchema = Joi.object<createTicket>({
    ticketTypeId: Joi.number().greater(0).required(),
})