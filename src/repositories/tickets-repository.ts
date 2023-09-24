import { prisma } from "@/config";

async function getTicketTypes() {
    const ticketTypes = await prisma.ticketType.findMany()
    return ticketTypes
}

export const ticketsRepository = { getTicketTypes }