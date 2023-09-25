import { Link, useNavigate } from 'react-router-dom';

import Button from '../components/core/Button';
import HomeLayout from '../layouts/HomeLayout';
import { RootState } from '../stores/reducers';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const username = useSelector((state: RootState) => state.user);
  const { t } = useTranslation();
  const featureKeys = [
    'features.template_use_dark_mode',
    'features.fully_written_in_typescript',
    'features.file_based_routing',
    'features.layout_system',
    'features.shared_state_management_with_redux',
    'features.react_hooks',
    'features.localization_with_react_i18next',
    'features.use_icons_from_any_icon_sets',
  ];

  return (
    <HomeLayout>
      <div className="flex justify-center w-full h-full text-slate-600 dark:text-slate-50">
        <div className="flex flex-col items-center py-16">
          <div className="text-9xl text-secondary-600 dark:text-secondary-500">
            <div className="i-solar-airbuds-case-charge-bold-duotone inline-block" />
          </div>

          <h1 className="max-w-xl text-5xl landing-title font-extrabold leading-normal text-center text-transparent 2xl:max-w-none bg-clip-text bg-gradient-to-r from-secondary-500 to-secondary-800 dark:from-secondary-300 dark:to-secondary-600">
            {t('home.template_desc')}
          </h1>

          <p className="py-4 text-lg text-center">{t('home.template_sub_desc')}</p>

          <div className="flex justify-center w-full p-4 space-x-2 rtl:space-x-reverse ">
            <Button
              as={Link}
              to="/dashboard"
              color="secondary"
              size="lg"
              prependIcon="i-solar-window-frame-bold-duotone"
            >
              <span>{t('home.dashboard')}</span>
            </Button>

            <Button
              as={Link}
              to="https://github.com/boussadjra/vitesse-react"
              target="_blank"
              color="secondary"
              variant="outline"
              size="lg"
              prependIcon="i-tabler-brand-github"
            >
              <span>Github</span>
            </Button>
          </div>

          <div className="w-full p-4 mt-8">
            <div className="flex flex-col items-center justify-center ">
              <h2 className="font-bold">{t('home.features')}</h2>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="inline-block w-10 h-1 rounded-full bg-secondary-600 dark:bg-secondary-300"></span>
                <span className="i-solar-star-bold-duotone text-secondary-600 dark:text-secondary-300">*</span>
                <span className="inline-block w-10 h-1 rounded-full bg-secondary-600 dark:bg-secondary-300"></span>
              </div>
            </div>

            <div className="flex justify-center pt-8 pl-4 ">
              <ul className="flex flex-col justify-start space-y-4 ">
                {featureKeys.map((featureKey) => (
                  <li key={featureKey} className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-2xl text-secondary-600 dark:text-secondary-300 i-solar-check-circle-bold-duotone"></span>
                    <span>{t(featureKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
