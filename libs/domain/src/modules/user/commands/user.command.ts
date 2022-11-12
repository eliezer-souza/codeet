import { z } from 'zod';

import { command } from '../../../shared/command';
import { prismaClient } from '../../../shared/prisma-client';

export const getAllUsers = command().handler(
  async () =>
    await prismaClient.user.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        urlPhoto: true,
      },
    })
);

export const getUserById = command(
  z.object({ id: z.string().uuid().min(1) })
).handler(
  async ({ id }) =>
    await prismaClient.user.findUnique({
      where: { id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        urlPhoto: true,
      },
    })
);
