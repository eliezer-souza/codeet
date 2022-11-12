import { compare, hashSync } from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

import { command } from '../../../shared/command';
import { prismaClient } from '../../../shared/prisma-client';

export const login = command(
  z.object({ email: z.string().email().min(1), password: z.string().min(6) })
).handler(async ({ email, password }) => {
  const user = await prismaClient.user.findFirst({
    where: { email },
  });

  const passwordMatch = await compare(password, String(user?.password));

  if (!passwordMatch) {
    throw new Error('Invalid login');
  }

  return { userId: user?.id };
});

export const register = command(
  z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email().min(1),
    password: z.string().min(6),
  })
).handler(async ({ firstName, lastName, email, password }) => {
  const user = await prismaClient.user.create({
    data: {
      id: uuidv4(),
      firstName,
      lastName,
      email,
      password: hashSync(password),
    },
  });

  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
});
