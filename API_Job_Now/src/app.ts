import path from 'path'
import express from 'express'
import cors from 'cors'
import Logger from './core/logger'
import { ConsoleColor } from './core/console'
import router from './routes'
import TokenMiddleware from './security/token.middleware'

export class App {
  public static run (port: number): void {
    const app = new App().express
    app.listen(port, () => Logger.log(`--> App started at port ${port}`, ConsoleColor.FgGreen))
  }

  public express: express.Application;

  constructor () {
    this.express = express()
    this.setupViewEngine()
    this.setupExpress()
    this.setupLogger()
    this.routes()
  }

  // configurar as views
  private setupViewEngine (): void {
    this.express.set('views', path.join(__dirname, '../views'))
    this.express.set('view engine', 'ejs')
  }

  // configurar os middleware
  private setupExpress (): void {
    this.express.use(cors())
    this.express.use(express.json())
    this.express.use(express.urlencoded({
      extended: true
    }))
  }

  // configuraçao do middleware que faz login
  private setupLogger () : void {
    this.express.use(Logger.logRequestsMiddleware)
  }

  // configurar as rotas
  private routes (): void {
    this.express.use(express.static(path.join(__dirname, '..', 'public')))
    this.express.use(TokenMiddleware.tokenVerify)
    this.express.use(router)
  }
}