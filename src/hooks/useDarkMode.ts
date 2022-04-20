import { useEffect, useState } from "react";

export default function useDarkMode() {
    const [isDark, setIsDark] = useState(false);

    const toggleDark = () => {
        
        setIsDark(!isDark);
        //save to local storage
        localStorage.setItem('isDark', JSON.stringify(!isDark));


    }
    useEffect(() => {
        const isDark = JSON.parse(localStorage.getItem('isDark') || 'false');
        setIsDark(isDark);
    }, [])
    useEffect(() => {

        document.body.classList[isDark ? 'add' : 'remove']('dark');
    }, [isDark]);


    return { toggleDark };
}
