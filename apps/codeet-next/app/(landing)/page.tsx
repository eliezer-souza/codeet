import Link from 'next/link';
import { ArrowRightCircle, Calendar, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <section className="h-[calc(100vh_-_6rem)] flex items-center justify-center">
      <div className="container grid items-center justify-center gap-6 p-8">
        <div className="flex flex-col items-center gap-4 md:max-w-[960px]">
          <Link
            target="_blank"
            href="https://github.com/eliezer-souza/codeet"
            className="group inline-flex items-center space-x-2 rounded-full text-sm font-medium"
          >
            <span>Follow development on GitHub</span>
            <span className="rounded-full bg-slate-100 p-1 transition-colors group-hover:bg-slate-900 group-hover:text-white">
              <ArrowRightCircle width={14} height={14} />
            </span>
          </Link>
          <h1 className="text-3xl font-black leading-[1.1] sm:text-4xl md:text-6xl text-center">
            Find the most exciting
            <span className="block font-black text-lightPrimary">
              technology events
            </span>
          </h1>
          <p className="max-w-[85%] text-lg leading-normal text-slate-700 sm:text-xl sm:leading-8 text-center">
            An open-source application to help you manage your technology
            events. Create groups, organize events, notify users of new events.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <Link
            href="/groups"
            rel="noreferrer"
            className="relative inline-flex h-11 items-center rounded-md border border-slate-200 bg-white px-8 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Users width={16} height={16} className="mr-2" />
            Explore groups
          </Link>
          <Link
            href="/events"
            rel="noreferrer"
            className="relative inline-flex h-11 items-center justify-center rounded-md border border-slate-200 bg-white px-8 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Calendar width={16} height={16} className="mr-2" />
            Explore events
          </Link>
        </div>
      </div>
    </section>
  );
}
