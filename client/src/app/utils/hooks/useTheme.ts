import { TTheme } from '@utils/interfaces/theme';
import { useState, useEffect } from 'react';

export const useTheme = () => {
  
    const storageTheme = localStorage.getItem('theme') as TTheme || 'dark'

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
