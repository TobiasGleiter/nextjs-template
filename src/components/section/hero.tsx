import { cn } from '@/src/lib/utils';
import Logo from '../image/logo/logo';
import { Button, buttonVariants } from '../ui/button';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start">
          <span className="relative">Simple Template,</span>
          <span>For You.</span>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed font-semibold">
          An easy entry point for starting a good SaaS project.
        </p>
        <div className="flex flex-col gap-2 items-start">
          <Button
            className={cn(
              buttonVariants({ variant: 'default', size: 'lg' }),
              'px-12 py-6'
            )}
          >
            <Logo />
            <span>Get This Template</span>
          </Button>
          <p className="text-sm md:text-base flex justify-center items-center gap-2">
            Be the first, build with it what you want.
          </p>
        </div>
      </div>
      <div>{/** IMAGE */}</div>
    </section>
  );
}
