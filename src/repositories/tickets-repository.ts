import { prisma } from "@/config";
import { newTicket } from "@/protocols";

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

async function createTicket(newTicket: newTicket) {
    const create = await prisma.ticket.create({
        data: newTicket,
        include:{
            TicketType:true
        }
    })
    return create
}

async function getTicketById(id:number) {
    const ticket = await prisma.ticket.findFirst({
        where:{
            id
        },
        include:{
            Enrollment:true
        }
    })
    return ticket  
}

export const ticketsRepository = { getTicketTypes , getTicketByUser, createTicket, getTicketById }