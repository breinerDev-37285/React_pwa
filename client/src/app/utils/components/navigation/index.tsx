import { ThemeContext } from '@context/theme'
import { IRedux } from '@redux/interfaces/redux'
import { useForm } from '@utils/hooks/useForm'
import { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

interface ITheme {
    check: boolean
}

const MainNavigation = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const init: ITheme = {
        check: theme === 'dark',
    }

    const { check, handleInputChange } = useForm(init)

    useEffect(() => {
        setTheme(check ? 'dark' : 'light')
    }, [check, setTheme])

    return (
        <div className="navbar bg-base-100 px-5">
            <div className="navbar-start">
                <div className="dropdown lg:hidden pr-3">
                    <label tabIndex={0} className="btn btn-ghost">
                        <i className="fa-solid fa-bars text-xl"></i>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-200 rounded-box w-52"
                    >
                        <Nav />
                    </ul>
                </div>
                <a className="normal-case text-xl">BreinerTech</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex-navbar menu menu-horizontal p-0">
                    <Nav />
                </ul>
            </div>
            <div className="navbar-end">
                <label
                    className={`swap swap-rotate pr-3 ${
                        check && 'swap-active'
                    }`}
                    htmlFor="checkTheme"
                >
                    <i className="fa-solid fa-sun text-xl swap-on" />
                    <i className="fa-solid fa-moon text-xl swap-off" />
                </label>

                <input
                    id="checkTheme"
                    type="checkbox"
                    className="toggle"
                    checked={check}
                    name="check"
                    onChange={handleInputChange}
                />
            </div>
        </div>
    )
}

const Nav = () => {
    const { uid } = useSelector((i: IRedux) => i.auth)

    return (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/about">About</Link>
            </li>

            <li>
                <Link to="/contacts">Contacts</Link>
            </li>

            <li>
                <Link to="/services">Services</Link>
            </li>

            {!uid && (
                <li tabIndex={0}>
                    <Link to="/login">Auth</Link>
                    <ul className="p-2">
                        <li>
                            <Link to="/login">Sign IN</Link>
                        </li>

                        <li>
                            <Link to="/login/register">Register</Link>
                        </li>
                    </ul>
                </li>
            )}

            {uid && (
                <li>
                    <Link to="/app">App</Link>
                </li>
            )}
        </>
    )
}

export default MainNavigation
