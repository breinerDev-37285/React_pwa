import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainNavigation from '@utils/components/navigation'
import ProtectedAppLayout from '@modules/app/layout'
import { PrivateRoute, PublicRoute } from './types'
import LandingLayout from '@modules/landing/layout'
import { useSelector } from 'react-redux'
import { IRedux } from '@redux/interfaces/redux'
import { LayoutAuth } from '@modules/auth/layout'
import { Footer } from '@utils/components/footer/footer'

export const MainRouting = () => {
    const { uid } = useSelector((i: IRedux) => i.auth)

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
