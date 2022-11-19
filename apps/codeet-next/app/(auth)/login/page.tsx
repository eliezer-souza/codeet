'use client';

import Image from 'next/image';
import { signIn, SignInOptions } from 'next-auth/react';

import { Logo } from '../../../components/ui/logo';
import { useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const searchParams = useSearchParams();

  const signInOptions: SignInOptions = {
    redirect: false,
    callbackUrl: searchParams.get('from') || '/',
  };

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center px-4">
      <div className="flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <button
            type="button"
            onClick={() => {
              throw new Error('Sentry Frontend Error');
            }}
          >
            Throw error
          </button>
          <Logo />
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-sm text-slate-600">Please login to your account</p>
        </div>
        <div className="flex flex-col gap-4">
          <button
            className="inline-flex h-11 gap-2 w-full justify-center items-center rounded-md border border-slate-200 bg-white px-8 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => signIn('github', signInOptions)}
          >
            <Image src="/github.svg" width={12} height={12} alt="Logo GitHub" />
            GitHub
          </button>
          <button
            className="inline-flex h-11 gap-2 w-full justify-center items-center rounded-md border border-slate-200 bg-white px-8 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => signIn('google', signInOptions)}
          >
            <Image src="/google.svg" width={12} height={12} alt="Logo Google" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
}
