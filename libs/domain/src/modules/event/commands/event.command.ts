import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

import { command } from '../../../shared/command';
import { prismaClient } from '../../../shared/prisma-client';

export const createEvent = command(
  z.object({
    name: z.string().min(1),
    details: z.string().min(1),
    date: z.date(),
    venue: z.object({
      street: z.string().min(1),
      number: z.number().min(1),
      city: z.string().min(1),
      country: z.string().min(1),
      zipcode: z.string().min(1),
    }),
    groupId: z.string().min(1),
  })
).handler(
  async ({ name, details, date, venue, groupId }) =>
    await prismaClient.event.create({
      data: {
        id: uuidv4(),
        name,
        details,
        date,
        venue,
        groupId,
      },
    })
);

export const getAllEvents = command().handler(
  async () => await prismaClient.event.findMany()
);

export const getEventById = command(
  z.object({ id: z.string().uuid().min(1) })
).handler(
  async ({ id }) =>
    await prismaClient.event.findUnique({
      where: { id },
      include: { Participant: { include: { user: true } }, group: true },
    })
);
