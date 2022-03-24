import { connect, disconnect,ConnectOptions } from 'mongoose'

export default class Database {

    private readonly url: string
    private readonly config: ConnectOptions

    constructor() {
        this.url = String(process.env.DB_URL)
        this.config = {
            autoIndex: false,
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            family: 4
        };
    }

    Connect() {
        return connect(this.url, this.config)
    }

    Disconnect() {
        return disconnect()
    }
}