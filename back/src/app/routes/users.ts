import { Router } from 'express'


export default class UserRoutes {
    private static route:Router = Router()

    constructor() {

    }

    static Routes() {
        return this.route
    }
}