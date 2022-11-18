import { unstable_getServerSession } from "next-auth/next"

import { nextAuthOptions } from "./auth"

export async function getSession() {
  return await unstable_getServerSession(nextAuthOptions);
}

export async function getUserSession() {
  const session = await getSession()

  return session?.user
}