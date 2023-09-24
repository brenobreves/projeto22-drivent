import { notFoundError, unauthorizedError } from "@/errors"
import { paymentsRepository, ticketsRepository } from "@/repositories"

async function getPayments(ticketId: number, userId: number) {
    const ticketExists = await ticketsRepository.getTicketById(ticketId)
    if(!ticketExists) throw notFoundError()
    if(userId !== ticketExists.Enrollment.userId) throw unauthorizedError()
    const paymentInfo = await paymentsRepository.getPaymentsByTicket(ticketId)
    return paymentInfo
}

export const paymentsService = { getPayments }