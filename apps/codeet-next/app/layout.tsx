import '../theme/global.css';

import Link from 'next/link';
import { Logo } from '../components/logo';
import { getUserSession } from '../lib/session';
import UserNav from '../components/user-nav';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const user = await getUserSession();

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <header className="container flex items-center justify-between p-4 sticky top-0 bg-white">
            <div className="flex gap-6 md:gap-10">
              <Link href="/" className="flex items-center space-x-2">
                <Logo />
                <span className="hidden font-bold sm:inline-block">Codeet</span>
              </Link>
              <nav className="flex items-center gap-6 sm:gap-8">
                <Link
                  href="/groups"
                  className="text-sm font-medium hover:text-primary"
                >
                  Groups
                </Link>
                <Link
                  href="/events"
                  className="text-sm font-medium hover:text-primary"
                >
                  Events
                </Link>
              </nav>
            </div>
            <nav>
              {user ? (
                <UserNav {...user} />
              ) : (
                <Link
                  href="/login"
                  className="relative inline-flex items-center rounded-md border border-transparent bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-lightPrimary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Login
                </Link>
              )}
            </nav>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
