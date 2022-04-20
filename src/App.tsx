import React, { Suspense, useState } from 'react'
import logo from './logo.svg'

import {  useRoutes } from 'react-router-dom'

import routes from '~react-pages'

function App() {

  return (
    <div className=' w-full bg-slate-200 dark:bg-primary-900 m-0 root'>

      <Suspense fallback={<p>Loading...</p>}>
  
       {useRoutes(routes)}
     
      </Suspense>

    </div>
  )
}

export default App
