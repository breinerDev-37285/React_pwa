import { Provider } from 'react-redux'
import Store from '@redux/store'
import MainRouting from '@router/index'
import { ThemeProvider } from './context/theme'
import { MainSpinner } from '@utils/components/spinner'

const App = () => {
    return (
        <div>
            <Provider store={Store}>
                <ThemeProvider>
                    <MainSpinner>
                        <MainRouting />
                    </MainSpinner>
                </ThemeProvider>
            </Provider>
        </div>
    )
}

export default App
