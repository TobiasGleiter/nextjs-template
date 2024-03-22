import { CompanyName } from '@/src/config/company';
import { cn } from '@/src/lib/utils';
import Link from 'next/link';
import Logo from '../image/logo/logo';
import { buttonVariants } from '../ui/button';

export default function NavigationBar() {
  return (
    <div className="flex w-full items-center justify-between py-4">
      <div className="flex gap-2 items-center">
        <Logo />
        <span className="font-heading font-bold">{CompanyName}</span>
      </div>
      <div className="flex gap-2 items-center">
        <Link href={'#'} className={cn(buttonVariants({ variant: 'ghost' }))}>
          Link
        </Link>
        <Link
          href={'/login'}
          className={cn(buttonVariants({ variant: 'default' }))}
        >
          Login
        </Link>
      </div>
    </div>
  );
}
