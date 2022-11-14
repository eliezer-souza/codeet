import Link from 'next/link';
import { Search } from 'lucide-react';

export default function LandingPage() {
  return (
    <section className="container grid items-center justify-center gap-6 pt-8 md:pt-12 lg:pt-24 px-24">
      <div className="flex flex-col items-start gap-4 md:max-w-[800px]">
        <h1 className="text-3xl font-black leading-[1.1] sm:text-4xl md:text-6xl">
          Find the most exciting
          <span className="block font-black text-lightPrimary">
            technology events
          </span>
        </h1>
        <p className="max-w-[85%] text-lg leading-normal text-slate-700 sm:text-xl sm:leading-8">
          An open-source application to help you manage your technology events.
          Create groups, organize events, notify users of new events.
        </p>
      </div>
      <div className="flex gap-4">
        <div className="border border-slate-300 py-2 px-3 inline-flex items-center bg-white rounded-md p-3 hover:border-slate-400 w-full max-w-lg h-11">
          <Search
            width={18}
            height={18}
            className="mr-2 h-full flex items-center justify-center stroke-slate-400"
          />
          <input
            className="text-lg placeholder:text-slate-400 outline-none w-full h-full truncate"
            placeholder="Event title or keyword"
          />
          <div className="ml-2 h-full flex items-center justify-center border-l pl-2 text-slate-400">
            <button className="relative inline-flex h-full items-center rounded-md border border-transparent bg-primary px-8 py-2 font-medium text-white hover:bg-lightPrimary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Search
            </button>
          </div>
        </div>
        <Link
          href="https://github.com/eliezer-souza/codeet"
          target="_blank"
          rel="noreferrer"
          className="relative inline-flex h-11 items-center rounded-md border border-slate-200 bg-white px-8 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
        >
          GitHub
        </Link>
      </div>
    </section>
  );
}
