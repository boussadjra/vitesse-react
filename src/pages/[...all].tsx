import Button from '@/components/core/Button';
import { Link } from 'react-router-dom';
import { t } from 'i18next';

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-full  min-h-screen bg-slate-200 dark:bg-primary-900">
      <div className="text-center space-y-8 text-slate-600 dark:text-slate-50">
        <h1 className="flex items-center mb-4 text-red-500">
          <span className="text-8xl  font-bold mx-4"> 404</span>{' '}
          <span className="text-4xl">| {t('common.not_found')}</span>
        </h1>
        {/* go to home */}
        <Button as={Link} to="/" color="primary" variant="solid" size="lg">
          {t('home.go_home')}
        </Button>
        {/* go back */}
        <Button onClick={() => window.history.back()} color="secondary" variant="text" size="lg">
          {t('common.back')}
        </Button>
      </div>
    </div>
  );
}
