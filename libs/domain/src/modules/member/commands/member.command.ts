import { z } from 'zod';

import { command } from '../../../shared/command';
import { prismaClient } from '../../../shared/prisma-client';

export const getMembersByGroup = command(
  z.object({ groupId: z.string().uuid().min(1) })
).handler(async ({ groupId }) =>
  await prismaClient.member.findMany({
    where: {
      groupId,
    },
    include: {
      user: true
    }
  })
);
