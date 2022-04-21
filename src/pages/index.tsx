import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Home from '../layouts/home';
import { useSelector } from 'react-redux';
import { RootState } from '../stores/reducers';
import { useTranslation } from 'react-i18next';



export default function HomePage() {
    const [name, setName] = useState('');
    const navigate = useNavigate()
    const username = useSelector((state: RootState) => state.user);
    const { t } = useTranslation()
    const features = ['This template has also the dark mode', 'Fully written in Typescript & TSX', 'File based routing', 'Layout system', 'Shared state management with Redux', 'React Hooks', 'Localisation with React-i18next', 'Use icons from any icon sets with classes & attributes']


    return (<Home>

        <div className="flex justify-center w-full h-full text-slate-600 dark:text-slate-50">
            <div className="flex flex-col items-center py-16" >
                <div className='text-9xl text-primary-500'>
                    <div i="carbon-flash-filled" className="inline-block" />

                </div>

                <h1 className='max-w-2xl text-5xl font-extrabold leading-normal text-center text-transparent 2xl:max-w-none bg-clip-text bg-gradient-to-r from-primary-300 to-primary-600'>
                    {t('home.template_desc')}
                </h1>


                <p className="py-4 text-lg text-center">
                    {t('home.template_sub_desc')}
                </p>




                <div className='flex justify-center w-full p-4 space-x-2 rtl:space-x-reverse '>
                    <Link to="/dashboard" className="flex items-center px-4 py-2 space-x-2 text-xl text-white rounded shadow-md rtl:space-x-reverse focus:shadow decoration-none bg-primary-500 hover:bg-primary-600 centered">
                        <span i="carbon-dashboard"></span>
                        <span>{t('home.dashboard')}</span>

                    </Link>
                    <Link to="https://github.com/boussadjra/vitesse-react" target="_blank" className="flex items-center px-4 py-2 space-x-2 text-xl text-white transition-colors duration-300 border-2 rounded rtl:space-x-reverse decoration-none text-primary-500 border-primary-500 hover:bg-primary-600 hover:text-white centered">
                        <span i="carbon-logo-github"></span>
                        <span>{t('home.view_github')}</span>

                    </Link>
                </div>

                <div className='w-full p-4 mt-8' >
                    <div className="flex flex-col items-center justify-center ">
                        <h2 className='font-bold'>
                            {t('home.features')}

                        </h2>
                        <div className='flex items-center space-x-2 rtl:space-x-reverse'>
                            <span className="inline-block w-10 h-1 rounded-full bg-primary-500"></span>
                            <span className="i-carbon-star-filled text-primary-500">*</span>
                            <span className="inline-block w-10 h-1 rounded-full bg-primary-500"></span>
                        </div>
                    </div>

                    <div className='flex justify-center pt-8 pl-4 '>
                        <ul className='flex flex-col justify-start space-y-4 '>
                            {features.map(feature => <li key={feature} className='flex items-center space-x-2 rtl:space-x-reverse'>
                                <span className='text-2xl text-green-500 i-carbon-checkmark-filled'></span>
                                <span>{feature}</span>
                            </li>)}

                        </ul>

                    </div>
                </div>


            </div>

        </div>
    </Home>
    );
}

