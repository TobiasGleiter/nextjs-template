import FooterNavigation from '@/src/components/navigation/footer';
import MainNavigation from '@/src/components/navigation/main';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="container max-w-5xl">
      <MainNavigation />
      <main className="flex-1 min-h-screen">{children}</main>
      <FooterNavigation />
    </div>
  );
}
