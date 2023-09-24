import { notFoundError } from "@/errors";
import { ticketsRepository } from "@/repositories";

async function getTicketTypes() {
    const ticketTypes = await ticketsRepository.getTicketTypes();
    return ticketTypes
}

async function getTicketByUser(id:number) {
    const userTicket = await ticketsRepository.getTicketByUser(id)
    if(!userTicket) throw notFoundError()
    return userTicket
}

export const ticketsService = { getTicketTypes, getTicketByUser }