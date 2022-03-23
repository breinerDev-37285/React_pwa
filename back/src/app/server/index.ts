import express, { Application,json, urlencoded } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import http from 'http'

export default abstract class Server {

    protected app: Application 
    protected port: number

    constructor( port:number ) {
        this.app = express()
        this.port = port

        this.onInit()
    }

    private onInit() {
        this.app.use(cors())
        this.app.use(helmet())
        this.app.use(json())
        this.app.use(urlencoded({extended: true}))
    }

    get Port() {
        return this.port
    }

    get App() {
        return this.app
    }

    set Port(port:number){
        this.port = port
    }

    abstract Listen(): http.Server

}