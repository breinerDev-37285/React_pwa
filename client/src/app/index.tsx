import { AuthProvider } from "@helpers/context"
import MainRouting from "./router"

const App = () => {
    return <AuthProvider>
        <MainRouting/>
    </AuthProvider>
}

export default App