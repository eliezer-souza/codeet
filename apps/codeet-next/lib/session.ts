import { unstable_getServerSession } from 'next-auth/next';

import { nextAuthOptions } from './auth';

export async function getSession() {
  return await unstable_getServerSession(nextAuthOptions);
}

type UserSession = { id: string } & Awaited<ReturnType<typeof getSession>>['user'];

export async function getUserSession(): Promise<UserSession> {
  const session = await getSession();

  return session?.user as UserSession;
}
