import { cn } from '@/src/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { Icons } from '../ui/icons';

export default function FooterNavigation() {
  return (
    <footer className="flex flex-col gap-4 my-8 mt-48">
      <div className="w-full bg-muted h-[1px]" />
      <div className="flex flex-row justify-between">
        <div className="flex gap-4">
          <Link
            className={cn(buttonVariants({ variant: 'ghost' }), 'flex gap-2')}
            target="_blank"
            href={'https://www.youtube.com/@tobiasgleiter'}
            aria-label={`Social link to my YouTube`}
          >
            <Icons.youtube />
            <span>YouTube</span>
          </Link>
        </div>
        <div>
          <Link
            className={cn(buttonVariants({ variant: 'ghost' }), 'flex gap-2')}
            target="_blank"
            href={'https://tobiasgleiter.de'}
            aria-label={`My portfolio website`}
          >
            @tobiasgleiter
          </Link>
        </div>
      </div>
    </footer>
  );
}
