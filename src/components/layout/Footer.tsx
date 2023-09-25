import Button from '../core/Button';
import i18n from '@/i18n';
import useDarkMode from '@/hooks/useDarkMode';

export default function Footer() {
  const { toggleDark } = useDarkMode();
  function changeLang(lang: string) {
    i18n.changeLanguage(lang);
  }
  return (
    <footer className="flex justify-center w-full pb-4 text-white footer">
      <nav className="flex mt-6 text-xl" dir="ltr">
        <Button onClick={toggleDark} color="secondary" variant="text" size="lg" iconOnly className="!text-lg">
          <span className="i-solar-moon-bold-duotone dark:i-solar-sun-bold-duotone " />
          <span className="sr-only">dark mode</span>
        </Button>
        <Button onClick={() => changeLang('en')} color="secondary" variant="text">
          English
        </Button>
        <Button onClick={() => changeLang('ar')} color="secondary" variant="text" className="ar-text">
          العربية
        </Button>
      </nav>
    </footer>
  );
}
