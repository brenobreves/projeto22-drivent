import { cardData, paymentBody } from "@/protocols";
import Joi from "joi";

export const processPaymentSchema = Joi.object<paymentBody>({
    ticketId: Joi.number().greater(0).required(),
    cardData: Joi.object<cardData>({
        issuer: Joi.string().required(),
        name: Joi.string().required(),
        number: Joi.number().positive().required(),
        expirationDate: Joi.date().required(),
        cvv: Joi.number().greater(99).less(1000).required()
    })
})