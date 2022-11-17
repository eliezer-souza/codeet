'use client';

import { ArrowLeftCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Back() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex h-11 w-full md:w-auto items-center justify-center rounded-md border border-slate-200 bg-white px-8 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <ArrowLeftCircle width={16} height={16} className="mr-2" />
      Back
    </button>
  );
}
