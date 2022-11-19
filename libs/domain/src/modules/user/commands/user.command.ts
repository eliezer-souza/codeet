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
        Participant: { include: { event: true } },
        Member: { include: { group: true } },
      },
    })
);
