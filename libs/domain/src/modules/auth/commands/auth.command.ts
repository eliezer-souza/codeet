import { compare, hashSync } from 'bcryptjs';
import { command } from '../../../shared/command';
import { prismaClient } from '../../../shared/prisma-client';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

export const login = command(
  z.object({ email: z.string(), password: z.string() })
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
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string(),
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
