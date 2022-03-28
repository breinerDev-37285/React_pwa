import { useTheme } from '@utils/hooks/useTheme'
import { createContext, ReactNode } from 'react'
import { TTheme } from '@utils/interfaces/theme'

interface IThemeContext {
    theme: TTheme | ''
    setTheme: (val: TTheme) => void
}

export const ThemeContext = createContext<IThemeContext>({
    theme: '',
    setTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const { theme, setTheme } = useTheme('light')

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
