import Button from '../core/Button';
import Dropdown from '../core/Dropdown';
import i18n from '@/i18n';
import useDarkMode from '@/hooks/useDarkMode';
import { useTranslation } from 'react-i18next';

const DashboardHeader = ({
  sidebarCollapsed,
  setSidebarCollapsed,
}: {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
}) => {
  const { t } = useTranslation();

  const { toggleDark } = useDarkMode();

  function changeLang(lang: string) {
    i18n.changeLanguage(lang);
    document.body.dir = i18n.dir();
  }

  return (
    <header
      className={`${
        sidebarCollapsed ? 'md:pl-20 md:rtl:pr-20' : 'pl-0 rtl:pl-2 md:rtl:pr-40 md:rtl:pr-72 md:pl-72'
      }  pl-2 transition-padding duration-700 w-full md:fixed right-0 z-20 flex flex-col items-center justify-center md:justify-between  px-4 py-2 space-y-2 shadow-md  md:py-0 md:space-y-none md:h-16 md:flex-row bg-slate-100 dark:bg-slate-900`}
    >
      <div className="hidden md:block">
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="text-3xl cursor-pointer fill-current i-solar-hamburger-menu-linear  text-slate-600 dark:text-white hover:bg-slate-500"
        >
          <span className="sr-only">toggle sidebar</span>
        </button>
      </div>

      <form className="w-96">
        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          {t('common.search')}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="i-solar-magnifer-linear w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={t('common.search')}
            required
          />
        </div>
      </form>

      <div className="flex items-center space-x-4 rtl:space-x-reverse text-slate-600 dark:text-white">
        <button
          onClick={toggleDark}
          aria-label="dark mode"
          className="text-xl cursor-pointer i-solar-sun-2-bold-duotone dark:i-solar-moon-bold-duotone text-secondary-600"
        >
          <span className="sr-only">dark mode</span>
        </button>
        <div className="flex">
          <Dropdown
            renderTrigger={(onClick) => (
              <Button variant="text" size="lg" iconOnly onClick={onClick}>
                <span className="i-solar-global-bold-duotone text-primary-700 dark:text-primary-500" />
              </Button>
            )}
            renderContent={() => (
              <div className="flex flex-col ">
                <Button onClick={() => changeLang('en')} color="secondary" variant="text">
                  English
                </Button>
                <Button onClick={() => changeLang('ar')} color="secondary" variant="text" className="ar-text">
                  العربية
                </Button>
              </div>
            )}
          />
        </div>

        <button className="text-xl cursor-pointer i-solar-bell-bing-bold-duotone text-blue-500 dark:text-blue-300">
          <span className="sr-only">notification</span>
        </button>
        {/* avatar */}
        <div className="flex items-center cursor-pointer">
          <img
            className="w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
