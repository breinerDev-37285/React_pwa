import { useRoutes } from 'react-router-dom'
import { Routes } from './routes'

export const LandingRouting = () => {
    const element = useRoutes(Routes)
    return <>{ element }</>
}
