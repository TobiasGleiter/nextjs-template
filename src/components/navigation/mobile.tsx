'use client';

import { CompanyName } from '@/src/config/company';
import { cn } from '@/src/lib/utils';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../image/logo/logo';
import { buttonVariants } from '../ui/button';

export default function MobileNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="flex w-full justify-between md:hidden mt-4 py-4">
        <Logo />
        <button
          className={cn('bg-background group ')}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Navigation Menu"
        >
          <BugerMenu />
        </button>
      </div>
      {mobileMenuOpen && (
        <div className={cn('block z-30')}>
          <div className="fixed text-xl inset-y-0 left-0 z-30 w-full text-center p-12 bg-background">
            <div className="flex flex-col gap-8">
              <div className="flex gap-2 justify-center md:justify-start items-center">
                <Logo />
                <span className="font-bold text-sm">{CompanyName}</span>
              </div>
              <div className="flex flex-col w-full items-center gap-4 py-6">
                <Link
                  href={'#pricing'}
                  className={cn(
                    buttonVariants({ variant: 'secondary' }),
                    'px-8 py-1'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
              </div>
              <div className="w-full bg-muted h-[1px]" />
              <div className="flex flex-col w-full items-center gap-4">
                <button
                  className="w-fit h-6 py-6 pr-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Cross />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const BugerMenuLine = () => {
  return <span className={cn('flex w-6 h-[2px] bg-foreground')} />;
};

const BugerMenu = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-[4px] h-[1.2rem] w-[1.2rem]">
      <BugerMenuLine />
      <BugerMenuLine />
      <BugerMenuLine />
    </div>
  );
};

const Cross = (props: any) => {
  return (
    <div {...props}>
      <div className="flex flex-col">
        <span className={cn('flex w-6 rotate-45 h-[2px] bg-foreground')} />
        <span
          className={cn(
            'flex w-6 -rotate-45 -translate-y-[2px] h-[2px] bg-foreground'
          )}
        />
      </div>
    </div>
  );
};
