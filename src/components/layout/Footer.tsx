import i18n from '../../i18n';
import useDarkMode from '../../hooks/useDarkMode';

export default function Footer() {
  const { toggleDark } = useDarkMode();
  function changeLang(lang: string) {
    i18n.changeLanguage(lang);
  }
  return (
    <footer className="flex justify-center w-full pb-4 text-white footer">
      <nav className="flex mt-6 text-xl" dir="ltr">
        <button
          onClick={toggleDark}
          className="cursor-pointer bg-transparent  transition-colors duration-300 flex rtl:space-x-reverse space-x-2 items-center border-none  decoration-none  text-primary-500 hover:bg-primary-600 hover:text-white font-light p-2 rounded-full  centered  !outline-none text-xl"
          aria-label="change color mode"
        >
          <div className="i-solar-moon-broken dark:i-solar-sun-broken " />
        </button>
        <button
          onClick={() => changeLang('en')}
          className="cursor-pointer bg-transparent   flex rtl:space-x-reverse space-x-2 items-center border-none  decoration-none  text-primary-500    p-2 px-3 rounded-full  centered  !outline-none "
        >
          English
        </button>
        <button
          onClick={() => changeLang('ar')}
          className="cursor-pointer bg-transparent   flex rtl:space-x-reverse space-x-2 items-center border-none  decoration-none  text-primary-500   p-2 px-3 rounded-full  centered  !outline-none "
        >
          العربية
        </button>
      </nav>
    </footer>
  );
}
