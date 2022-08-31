import { connect } from "mongoose"
import { MONGODB_URI } from './config'

(async () => {
    try {
        const db = await connect(MONGODB_URI || 'mongodb://localhost:27017/test')
        console.log('DB connected', db.connection.name);

    } catch (error) {
        console.error(error)
    }

})()
