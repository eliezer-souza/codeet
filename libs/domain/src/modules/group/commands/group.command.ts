import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

import { command } from '../../../shared/command';
import { prismaClient } from '../../../shared/prisma-client';

export const createGroup = command(
  z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    details: z.string().min(1),
    administratorId: z.string().uuid().min(1),
  })
).handler(
  async ({ name, description, details, administratorId }) =>
    await prismaClient.group.create({
      data: {
        id: uuidv4(),
        name,
        description,
        details,
        administratorId,
      },
    })
);

export const getAllGroups = command().handler(
  async () => await prismaClient.group.findMany()
);

export const getGroupById = command(
  z.object({ id: z.string().uuid().min(1) })
).handler(
  async ({ id }) => await prismaClient.group.findUnique({ where: { id } })
);
