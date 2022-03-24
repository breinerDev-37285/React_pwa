import { IThemeAction,IThemeState } from './../interfaces/theme';
import { THEME } from '../types'


export const setTheme = (payload:IThemeState):IThemeAction => ({
    type: THEME,
    payload
})