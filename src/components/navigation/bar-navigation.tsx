import { cn } from '@/src/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';

export default function NavigationBar() {
  return (
    <div className="flex w-full items-center justify-between py-4">
      <span>Simple Template</span>
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
