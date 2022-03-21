import { IRoute } from '@interfaces/routes';
import { SignInScreen, RegisterScreen } from '@modules/login/pages';

export const Routes:IRoute[] = [{
    name: 'Sign In',
    path: 'signin',
    component: SignInScreen
},{
    name: 'Register',
    path: 'register',
    component: RegisterScreen
}]