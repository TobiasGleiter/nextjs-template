import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '../lib/utils';
import './globals.css';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next App Template',
  description: 'Setup by Tobias Gleiter',
};

/**
 * Root Layout of the application
 * @param children
 * @returns
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <Providers>
          <main className="flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
