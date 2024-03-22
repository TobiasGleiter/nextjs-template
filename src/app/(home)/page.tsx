import Featured from '@/src/components/section/featured';
import Hero from '@/src/components/section/hero';
import Problem from '@/src/components/section/problem';

export default function Home() {
  return (
    <main className="flex flex-col gap-24">
      <Hero />
      <Featured />
      <Problem />
    </main>
  );
}
