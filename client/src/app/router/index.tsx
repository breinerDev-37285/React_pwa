import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainNavigation from '@utils/components/navigation'
import ProtectedAppLayout from '@modules/app/layout'
import { PrivateRoute, PublicRoute } from './types'
import LandingLayout from '@modules/landing/layout'
import { useDispatch, useSelector } from 'react-redux'
import { IRedux } from '@redux/interfaces/redux'
import { LayoutAuth } from '@modules/auth/layout'
import { Footer } from '@utils/components/footer/footer'
import { useEffect } from 'react'
import { startCheckingAuth } from '@redux/actions/auth'
import { usePromiseTracker } from 'react-promise-tracker'

export const MainRouting = () => {
    const dispatch = useDispatch()
    const { uid, checking } = useSelector((i: IRedux) => i.auth)

    useEffect(() => {
        dispatch(startCheckingAuth())
    }, [dispatch, startCheckingAuth])

    // if (checking) {
    //     return <div>Espere...</div>
    // }

    return (
        <div className="h-full">
            <Router>
                <MainNavigation />
                <Routes>
                    <Route path="/*" element={<LandingLayout />} />

                    <Route
                        path="/login/*"
                        element={
                            <PublicRoute isAuth={!!uid}>
                                <LayoutAuth />
                            </PublicRoute>
                        }
                    />

                    <Route
                        path="/app/*"
                        element={
                            <PrivateRoute isAuth={!!uid}>
                                <Routes>
                                    <Route
                                        index
                                        element={<ProtectedAppLayout />}
                                    />

                                    <Route
                                        path="protectect2"
                                        element={<div>Protected page 2</div>}
                                    />
                                </Routes>
                            </PrivateRoute>
                        }
                    />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default MainRouting
