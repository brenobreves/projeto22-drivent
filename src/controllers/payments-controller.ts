import { AuthenticatedRequest } from "@/middlewares";
import { paymentBody } from "@/protocols";
import { paymentsService } from "@/services";
import { Response } from "express";

export async function getPayments(req: AuthenticatedRequest, res: Response) {
    const {ticketId} = req.query
    if(!ticketId || isNaN(Number(ticketId))) throw {name:"InvalidDataError", message: "Rota com querystring inválida ou inexistente"}
    const paymentInfo = await paymentsService.getPayments(Number(ticketId), req.userId)
    res.send(paymentInfo)
}

export async function processPayment(req: AuthenticatedRequest, res: Response) {
    const paymentData = req.body as paymentBody
    const process = await paymentsService.processPayment(paymentData, req.userId)
    res.send(process)
}