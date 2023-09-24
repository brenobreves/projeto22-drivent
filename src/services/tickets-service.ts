import { notFoundError } from "@/errors";
import { newTicket } from "@/protocols";
import { enrollmentRepository, ticketsRepository } from "@/repositories";
import { Ticket } from "@prisma/client";

async function getTicketTypes() {
    const ticketTypes = await ticketsRepository.getTicketTypes();
    return ticketTypes
}

async function getTicketByUser(id: number) {
    const userTicket = await ticketsRepository.getTicketByUser(id)
    if(!userTicket) throw notFoundError()
    return userTicket
}

async function createTicket(ticketTypeId: number, userId: number) {
    const enrollmentId = await validateEnrollment(userId)
    const ticketObj: newTicket = {
        enrollmentId,
        ticketTypeId,
        status: "RESERVED"
    }
    const newTicket = await ticketsRepository.createTicket(ticketObj)
    console.log(newTicket)
    return newTicket
}

async function validateEnrollment(userId: number) {
    const enrollment = await enrollmentRepository.findWithAddressByUserId(userId)
    if(!enrollment) throw notFoundError()
    return enrollment.id
}

export const ticketsService = { getTicketTypes, getTicketByUser, createTicket }