import React, { Suspense, useState } from 'react';

import logo from './logo.svg';
import routes from '~react-pages';
import { useRoutes } from 'react-router-dom';

function App() {
  return (
    <div className="w-full m-0 dark:bg-primary-950 root">
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
    </div>
  );
}

export default App;
