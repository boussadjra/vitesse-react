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
    const features = ['This template has also the dark mode', 'Fully written in Typescript & TSX', 'File based routing', 'Layout system', 'Shared state management with Redux', 'React Hooks', 'Localisation with React-i18next','Use icons from any icon sets with classes & attributes']
    return (



        <Home>

            <div className="h-full w-full flex justify-center text-slate-600 dark:text-slate-50">
                <div className="flex flex-col items-center py-16" >
                    <div className='text-9xl  text-primary-500'>
                        <div i="carbon-flash-filled" className="inline-block" />

                    </div>

                    <h1 className='font-extrabold text-5xl max-w-2xl 2xl:max-w-none leading-normal text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-600'>
                        {t('home.template_desc')}
                    </h1>


                    <p className="py-4 text-center text-lg">
                        {t('home.template_sub_desc')}
                    </p>




                    <div className='p-4 w-full flex justify-center rtl:space-x-reverse space-x-2  '>
                        <Link to="/dashboard" className="flex rtl:space-x-reverse space-x-2 items-center text-xl shadow-md focus:shadow  decoration-none bg-primary-500 hover:bg-primary-600  py-2 px-4 rounded  centered text-white">
                            <span i="carbon-dashboard"></span>
                            <span>{t('home.dashboard')}</span>

                        </Link>
                        <Link to="https://github.com/boussadjra/vitesse-react" target="_blank" className="transition-colors duration-300 flex rtl:space-x-reverse space-x-2 items-center  text-xl decoration-none border-2 text-primary-500 border-primary-500 hover:bg-primary-600 hover:text-white  py-2 px-4 rounded  centered text-white">
                            <span i="carbon-logo-github"></span>
                            <span>{t('home.view_github')}</span>

                        </Link>
                    </div>

                    <div className='p-4 w-full mt-8' >
                        <div className="flex flex-col justify-center items-center ">
                            <h2 className='font-bold'>
                                {t('home.features')}

                            </h2>
                            <div className='flex items-center space-x-2 rtl:space-x-reverse'>
                                <span className="inline-block h-1 w-10 bg-primary-500 rounded-full"></span>
                                <span className="i-carbon-star-filled text-primary-500">*</span>
                                <span className="inline-block h-1 w-10 bg-primary-500 rounded-full"></span>
                            </div>
                        </div>

                        <div className='flex pt-8 pl-4 justify-center '>
                            <ul className='space-y-4 flex flex-col justify-start '>
                                {features.map(feature => <li key={feature} className='flex space-x-2 rtl:space-x-reverse items-center'>
                                    <span className=' text-2xl i-carbon-checkmark-filled text-green-500'></span>
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

