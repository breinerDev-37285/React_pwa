import { NotFoundScreen } from '@pages/index';
import { IRoute } from '@interfaces/routes';
import { LoginScreen } from '@modules/index';

export const Routes:IRoute[] = [{
    name: 'login',
    path: '/login',
    component: LoginScreen
}, {
    name: 'not found',
    path: '*',
    component: NotFoundScreen
}]