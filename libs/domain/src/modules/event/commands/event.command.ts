import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

import { command } from '../../../shared/command';
import { prismaClient } from '../../../shared/prisma-client';

export const createEvent = command(
  z.object({
    name: z.string().min(1),
    details: z.string().min(1),
    date: z.string(),
    venue: z.object({
      street: z.string().min(1),
      // number: z.number().min(1),
      // city: z.string().min(1),
      // country: z.string().min(1),
      // zipcode: z.string().min(1),
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
        date: new Date(date).toISOString(),
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
      include: { participant: { include: { user: true } }, group: true },
    })
);

export const getEventsByGroup = command(
  z.object({ groupId: z.string().uuid().min(1) })
).handler(async ({ groupId }) =>
  await prismaClient.event.findMany({
    where: {
      groupId,
    }
  }))

export const verifyUserIsParticipantOfEvent = command(
  z.object({ userId: z.string().nullable(), eventId: z.string().uuid() })
).handler(async ({ userId, eventId }) => {
  if (userId) {
    const participant = await prismaClient.participant.findFirst({
      where: {
        userId,
        eventId,
      },
    });

    return {
      isParticipant: Boolean(participant),
    };
  }

  return {
    isParticipant: false,
  };
});

export const attendEvent = command(
  z.object({ userId: z.string().uuid(), eventId: z.string().uuid() })
).handler(
  async ({ userId, eventId }) =>
    await prismaClient.participant.create({
      data: {
        userId,
        eventId,
      },
    })
);

export const leaveEvent = command(
  z.object({ userId: z.string().uuid(), eventId: z.string().uuid() })
).handler(
  async ({ userId, eventId }) =>
    await prismaClient.participant.deleteMany({
      where: {
        userId,
        eventId,
      },
    })
);

export const editUser = command(
  z.object({
    id: z.string().uuid().min(1),
    name: z.string().min(1),
    details: z.string().min(1),
    date: z.string(),
    venue: z.object({
      street: z.string().min(1),
    }),
  })
).handler(async ({ id, name, details, date, venue }) => {
  await prismaClient.event.update({
    where: { id },
    data: {
      name,
      details,
      date,
      venue,
    },
  });
});

export const verifyUserIsAdministratorOfEvent = command(
  z.object({
    userId: z.string().uuid().nullable(),
    eventId: z.string().uuid(),
  })
).handler(async ({ eventId, userId }) => {
  if (userId) {
    const administratorEvent = await prismaClient.event.findFirst({
      where: {
        id: eventId,
        group: {
          administratorId: userId,
        },
      },
      include: {
        group: true,
      },
    });

    return {
      isEventAdministrator: Boolean(administratorEvent),
    };
  }

  return {
    isEventAdministrator: false,
  };
});
