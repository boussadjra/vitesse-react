import { useState } from 'react';
import Dashboard from '../layouts/dashboard';
import { useTranslation } from 'react-i18next';


export default function About() {

const {t}=useTranslation()
    return (
        <Dashboard >
            <div className="flex items-center justify-center h-full w-full">

                <div className="p-4 w-full">
                    <h1 className="text-center text-3xl font-bold">
                        {t('home.hello')}
                    </h1>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro tempora quam aperiam fugiat sequi qui, exercitationem corrupti beatae nemo, est nisi fuga explicabo consectetur, quidem officia quo esse vel corporis?
                </div>
            </div>
        </Dashboard>
    );
}

