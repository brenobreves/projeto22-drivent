import { getPayments, processPayment } from "@/controllers";
import { authenticateToken, validateBody } from "@/middlewares";
import { processPaymentSchema } from "@/schemas/payments-schemas";
import { Router } from "express";

const paymentsRouter = Router();

paymentsRouter.get('/', authenticateToken, getPayments)
paymentsRouter.post('/process', authenticateToken, validateBody(processPaymentSchema), processPayment)

export { paymentsRouter }