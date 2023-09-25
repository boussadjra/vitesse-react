import Loader from './components/layout/Loader';
import { Suspense } from 'react';
import routes from '~react-pages';
import useDirection from './hooks/useDirection';
import { useRoutes } from 'react-router-dom';

function App() {
  useDirection();

  return (
    <div className="w-full m-0 bg-gradient-to-b bg-primary-50 dark:to-slate-800 dark:from-primary-950 root">
      <Suspense fallback={<Loader />}>{useRoutes(routes)}</Suspense>
    </div>
  );
}

export default App;
