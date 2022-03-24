import Database from '@database/config'
import Server from '@server/main'

;(() => {
    const database = new Database()
    database.Connect().then(() => {
        console.log('database connected')
        const server = new Server(Number(process.env.PORT))
    
        server.Listen()
    })
})()