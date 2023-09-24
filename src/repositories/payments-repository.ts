import { prisma } from "@/config";

async function getPaymentsByTicket(ticketId: number) {
    const payment = await prisma.payment.findFirst({
        where:{
            ticketId
        }
    })
    return payment
}

export const paymentsRepository = { getPaymentsByTicket }