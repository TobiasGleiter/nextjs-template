import { cn } from '@/src/lib/utils';

export default function Home() {
  return (
    <main>
      <section id="hero" className={cn('flex h-72 w-full items-center')}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-bold">Hero!</h1>
            <p className="text-muted-foreground">Small description</p>
          </div>
          <ul className="font-semibold ml-6 list-disc">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
