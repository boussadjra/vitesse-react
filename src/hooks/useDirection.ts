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
  }, []);
  useEffect(() => {
    //change html element direction
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir();
    document.documentElement.classList.add(i18n.language + '-text');
  }, [i18n.dir()]);

  return { toggleDirection };
}
