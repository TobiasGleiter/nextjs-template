import { Raleway as FontHeading, Exo as FontSans } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontHeading = FontHeading({
  subsets: ['latin'],
  variable: '--font-heading',
});
