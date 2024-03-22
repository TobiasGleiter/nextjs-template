import type { Metadata } from 'next';

import { fontHeading, fontSans } from '../config/fonts';
import { cn } from '../lib/utils';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Next App Template',
  description: 'Setup by Tobias Gleiter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          fontSans.variable,
          fontHeading.variable,
          'font-sans antialiased'
        )}
      >
        <Providers>
          <main className="flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
