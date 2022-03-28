import NotMatch from '@utils/components/notFound'
import { RouteObject } from 'react-router-dom'
import { About, Contacts, Home, Services } from '../pages'

export const Routes: RouteObject[] = [
    {
        index: true,
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/contacts',
        element: <Contacts />,
    },
    {
        path: '/services',
        element: <Services />,
    },
    {
        path: '*',
        element: <NotMatch />,
    },
]
