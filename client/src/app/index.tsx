import { Provider } from 'react-redux'
import Store from '@redux/store'
import MainRouting from "@router/index"
import { ThemeProvider } from './context/theme'


const App = () => {

    return <div>
        <Provider store={Store}>
            <ThemeProvider>
                <MainRouting/>
            </ThemeProvider>
        </Provider>
    </div>
}

export default App