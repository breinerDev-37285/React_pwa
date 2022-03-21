export interface IRoute {
    name: string 
    component: TComponent,
    path: string 
}

type TComponent = () => JSX.Element