import { AuthenticatedRequest } from '@/middlewares';
import { createTicket } from '@/protocols';
import { ticketsService } from '@/services';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getTickets(req: AuthenticatedRequest, res: Response) {
  const userTicket = await ticketsService.getTicketByUser(req.userId)
  res.send(userTicket)
  }

export async function getTicketsType(req: Request, res: Response) {
  const ticketTypes = await ticketsService.getTicketTypes()
  res.send(ticketTypes)
}

export async function createTicket(req: AuthenticatedRequest, res: Response) {
    const body = req.body as createTicket
    const userTicket = await ticketsService.createTicket(body.ticketTypeId, req.userId)
    res.status(httpStatus.CREATED).send(userTicket)
  }