import { Icons } from '@/src/components/ui/icons';
import { cn } from '@/src/lib/utils';

export default function Home() {
  return (
    <main>
      <section id="hero" className={cn('flex h-72 w-full items-center')}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl lg:text-4xl font-bold text-pretty">
              Simple Template, For You.
            </h1>
            <p className="text-muted-foreground">
              An easy entry point for starting a good project.
            </p>
          </div>
          <ul className="font-semibold">
            <li className="flex gap-2 items-start">
              <Icons.check className=" w-4 h-4 block text-green-600 my-1" />
              <p>Tailwindcss, Shadcn/ui</p>
            </li>
            <li className="flex gap-2 items-start">
              <Icons.check className=" w-4 h-4 block text-green-600 my-1" />
              <p>ESLint, Commitlint and Husky</p>
            </li>
            <li className="flex gap-2 items-start">
              <Icons.check className=" w-4 h-4 block text-green-600 my-1" />
              <p>Cypress and GitHub Actions</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
