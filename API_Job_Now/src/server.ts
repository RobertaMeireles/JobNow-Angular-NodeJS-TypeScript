import * as dotenv from 'dotenv'
import { App } from './app'

dotenv.config()

const port: number = Number(process.env.PORT) || 3000

App.run(port)
