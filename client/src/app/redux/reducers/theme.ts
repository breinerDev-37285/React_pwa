import { IThemeState,IThemeAction } from './../interfaces/theme';
import { THEME } from '../types'

const init:IThemeState = {
    theme: 'light'
}

export const ThemeReducer = (state = init, {type, payload}:IThemeAction):IThemeState => {
 
    switch( type ){
        case THEME:
            state = {...state, ...payload}
            break
    }
    return state
}