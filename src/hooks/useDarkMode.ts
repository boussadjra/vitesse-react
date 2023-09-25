import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
    //save to local storage
    localStorage.setItem('isDark', JSON.stringify(!isDark));
  };

  useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem('isDark') || 'false');
    setIsDark(isDark);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return { toggleDark };
}
