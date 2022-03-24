import { Provider } from 'react-redux'
import Store from '@redux/store'
import MainRouting from "@router/index"


const App = () => {

    return <Provider store={Store}>
        <MainRouting/>
    </Provider>
}

export default App