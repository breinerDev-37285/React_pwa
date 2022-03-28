import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { AuthReducer } from './reducers/auth'
import { LOGOUT } from '@redux/types'

const reducer = combineReducers({
    auth: AuthReducer,
})

const rootReducer = (state: any, action: any) => {
    if (action.type === LOGOUT) {
        return reducer(undefined, action)
    }
    return reducer(state, action)
}

const store = configureStore({ reducer: rootReducer })

export default store
