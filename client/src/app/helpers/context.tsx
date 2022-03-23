import { createContext,ReactNode, useState } from 'react'

interface IAuthContext {
    isAuth: boolean,
    setAuthenticated: (val?: any) => void
}

export const AuthContext = createContext<IAuthContext>(null!)

export const AuthProvider = ({children}:{children:ReactNode}) => {

    const [isAuth, setAuthenticated] = useState(false);
    
    return <AuthContext.Provider value={{isAuth, setAuthenticated}}>{
        children
    }</AuthContext.Provider>
}