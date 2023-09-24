import { prisma } from "@/config";

async function getTicketTypes() {
    const ticketTypes = await prisma.ticketType.findMany()
    return ticketTypes
}

async function getTicketByUser(id:number) {
    const userTicket = await prisma.ticket.findFirst({
        where:{
            Enrollment:{
                userId: id
            },
        },
        include:{
            TicketType: true,
        },
    })
    return userTicket
}

export const ticketsRepository = { getTicketTypes , getTicketByUser}