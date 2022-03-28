import { TTheme } from '@utils/interfaces/theme';
import { useState, useEffect } from 'react';

export const useTheme = (themeInit: TTheme) => {
  
    const storageTheme = localStorage.getItem('theme') as TTheme || themeInit

    const [ theme, setTheme] = useState<TTheme>(storageTheme)

    useEffect(() => {
        const root = document.documentElement 
        root.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    },[theme])
  

    return {
        theme, 
        setTheme
    }

}