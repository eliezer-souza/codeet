import { z } from 'zod';

import { command } from '../../../shared/command';
import { prismaClient } from '../../../shared/prisma-client';

export const getAllUsers = command().handler(
  async () =>
    await prismaClient.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
      },
    })
);

export const getUserById = command(z.object({ id: z.string().min(1) })).handler(
  async ({ id }) =>
    await prismaClient.user.findUnique({
      where: { id },
      include: {
        participant: { include: { event: true } },
        member: { include: { group: true } },
      },
    })
);

export const editUser = command(
  z.object({
    id: z.string().uuid(),
    name: z.string().min(3).max(32),
  })
).handler(
  async ({ id, name }) =>
    await prismaClient.user.update({
      where: {
        id,
      },
      data: {
        name,
      },
    })
);
