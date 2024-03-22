import { CompanyName } from '@/src/config/company';
import Link from 'next/link';
import Logo from '../image/logo/logo';

export default function FooterNavigation() {
  return (
    <footer className="flex flex-col mt-48">
      <div className="w-full bg-muted h-[1px] mb-24" />
      <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-80 max-w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div className="flex gap-2 justify-center md:justify-start items-center">
            <Logo />
            <span className="font-bold text-sm">{CompanyName}</span>
          </div>
          <p className="mt-3 text-sm text-base-content/80 leading-relaxed">
            © 202X - All rights reserved
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-24 -mb-10 md:mt-0 mt-10 text-center md:text-left">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
              LINKS
            </div>
            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
              <Link href={'#pricing'}>Pricing</Link>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
              LEGAL
            </div>
            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
              <Link href={'/'}>Term Of Services</Link>
              <Link href={'/'}>Privacy Policy</Link>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
              MORE
            </div>
            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
              <Link href={'/'}>YouTube</Link>
              <Link href={'/'}>Website</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
