import { prisma } from "@/config";
import { newPayment } from "@/protocols";

async function getPaymentsByTicket(ticketId: number) {
    const payment = await prisma.payment.findFirst({
        where:{
            ticketId
        }
    })
    return payment
}

async function createPayment(paymentData:newPayment) {
    const create = await prisma.payment.create({
        data:paymentData
    })
    return create
}

export const paymentsRepository = { getPaymentsByTicket, createPayment }