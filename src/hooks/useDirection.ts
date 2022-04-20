import { useEffect, useState } from 'react';
import i18n from '../i18n';



export default function useDirection() {


    const [isRTL, setIsRTL] = useState(false);
    function toggleDirection() {
        setIsRTL(!isRTL);
        //save to local storage
        localStorage.setItem('isRTL', JSON.stringify(!isRTL));
    }
    useEffect(() => {
        const isRTL = JSON.parse(localStorage.getItem('isRTL') || 'false');
        setIsRTL(isRTL);
    }, [])
    useEffect(() => {
        //change html element direction
        document.body.dir = isRTL ? 'rtl' : 'ltr';

    }, [isRTL]);

    useEffect(() => {

       document.body.dir=i18n.dir()
    }, [i18n.dir()]);



    return { toggleDirection }
}