import { useTheme } from "@utils/hooks/useTheme";
import { createContext, ReactNode } from "react";

export const ThemeContext = createContext({}!)

export const ThemeProvider = ({children}:{children:ReactNode}) => {
    
    const theme = useTheme()

    return <ThemeContext.Provider value={{...theme}}>{
        children
    }</ThemeContext.Provider>
}