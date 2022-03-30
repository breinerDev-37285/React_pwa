import { DeleteSession, login, refresh } from './../services/users'
import { SaveUser, DeleteUser, GetUsers, UpdateUser } from '@services/users'
import { Router } from 'express'
import { verifyJWT } from '../middleware/jwt'

export default class UserRoutes {
    private readonly route: Router

    constructor() {
        this.route = Router()

        this.onInit()
    }

    static init() {
        return new UserRoutes()
    }

    private onInit() {
        this.route.route('/users').post(SaveUser).get(verifyJWT, GetUsers)

        this.route
            .route('/users/:id')
            .put(verifyJWT, UpdateUser)
            .delete(verifyJWT, DeleteUser)

        this.route.route('/login').post(login)
        this.route.route('/refresh').post(verifyJWT, refresh)

        this.route.route('/session/delete').delete(DeleteSession)
    }

    get Routes() {
        return this.route
    }
}
