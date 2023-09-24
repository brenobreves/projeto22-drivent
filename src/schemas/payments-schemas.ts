import { cardData, paymentBody } from "@/protocols";
import Joi from "joi";

export const processPaymentSchema = Joi.object<paymentBody>({
    ticketId: Joi.number().greater(0).required(),
    cardData: Joi.object<cardData>({
        issuer: Joi.string().equal("VISA","MASTERCARD").required(),
        name: Joi.string().required(),
        number: Joi.string().required(),
        expirationDate: Joi.string().required(),
        cvv: Joi.string().required()
    }).required(),
})