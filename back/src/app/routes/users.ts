import { SaveUser,DeleteUser,GetUsers,UpdateUser } from '@services/users';
import { Router } from 'express'


export default class UserRoutes {

    private readonly route:Router

    constructor() {
        this.route = Router()

        this.onInit()
    }

    static init() {
        return new UserRoutes()
    }

    private onInit(){
        this.route.route('/users')
            .post(SaveUser)
            .get(GetUsers)
        
        this.route.route('/users/:id')
            .put(UpdateUser)
            .delete(DeleteUser)
    }

    get Routes() {
        return this.route
    }
}