import { notFoundError, unauthorizedError } from "@/errors"
import { newPayment, paymentBody } from "@/protocols"
import { paymentsRepository, ticketsRepository } from "@/repositories"

async function getPayments(ticketId: number, userId: number) {
    await validateTicket(ticketId, userId)
    const paymentInfo = await paymentsRepository.getPaymentsByTicket(ticketId)
    return paymentInfo
}

async function processPayment(paymentData: paymentBody, userId: number) {
    const checkTicket = await validateTicket(paymentData.ticketId, userId)
    const paymentInfo: newPayment = {
        ticketId: paymentData.ticketId,
        value: checkTicket.TicketType.price,
        cardIssuer: paymentData.cardData.issuer,
        cardLastDigits: paymentData.cardData.number.slice(-4)
    }
    const newPayment = await paymentsRepository.createPayment(paymentInfo)
    await ticketsRepository.updatePaid(paymentData.ticketId)
    return newPayment
}

async function validateTicket(ticketId:number, userId: number) {
    const ticketExists = await ticketsRepository.getTicketById(ticketId)
    if(!ticketExists) throw notFoundError()
    if(ticketExists.Enrollment.userId !== userId) throw unauthorizedError()
    return ticketExists
}

export const paymentsService = { getPayments, processPayment }