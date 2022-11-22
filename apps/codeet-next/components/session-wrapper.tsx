'use client';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

type SessionWrapperProps = {
  children: ReactNode;
  session: Session;
};

export default function SessionWrapper({
  children,
  session,
}: SessionWrapperProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
