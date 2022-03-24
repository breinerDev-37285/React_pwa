export interface IThemeState {
    theme: 'dark' | 'light'
}

export interface IThemeAction {
    type: string
    payload?: IThemeState
}