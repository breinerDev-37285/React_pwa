import { configureStore } from '@reduxjs/toolkit'
import { AuthReducer } from './reducers/auth';
import { ThemeReducer } from './reducers/theme';

const store = configureStore({
    reducer: {
        auth: AuthReducer,
        theme: ThemeReducer
    }
})

export default store