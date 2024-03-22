import NavigationBar from './bar';
import MobileNavigation from './mobile';

export default async function MainNavigation() {
  return (
    <header className="z-50">
      <NavigationBar />
      <MobileNavigation />
    </header>
  );
}
