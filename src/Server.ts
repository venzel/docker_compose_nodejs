import { app } from './App'

class Server {
  static start(): void {
    const appExecuted = app.execute()

    appExecuted.listen(process.env.SERVER_PORT, () =>
      console.log(`Server in port ${process.env.SERVER_PORT}!`)
    )
  }
}

Server.start()
