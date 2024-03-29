import { ThemeToggle } from '@/lib/components/theme-toggle';
import AuthButton from '../auth/AuthButton';

const Header = () => {
  return (
    <header className="bg-base-100/80 sticky top-0 z-10 w-full backdrop-blur-md">
      <section className="wrapper mx-auto flex items-center justify-between p-4">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Reading List
          </h2>
        <div className="ml-auto flex gap-4">
          <ThemeToggle />
          <AuthButton />
        </div>
      </section>
    </header>
  );
};

export default Header;
