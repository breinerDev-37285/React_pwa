import Server from '.'
import endPoint from '@routes/index'

export default class MainServer extends Server {

    constructor(port: number){
        super(port)

        this.init()
    }

    private init(){
        this.app.use('/api/v1',endPoint)
    }

    public Listen(callback?: (val?: any) => void) {
        return this.app.listen(this.port, callback 
            ? callback 
            : () => console.log(`listening app on port ${this.port}`))
    }
    
}