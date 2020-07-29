import { Request, Response } from 'express'
import { UsersRepository } from './../repositories/users.repository'

class UsersController {
  // All users
  public async users (req: Request, res: Response): Promise<Response> {
    try {
      const users = await UsersRepository.users()
      return res.json({ users })
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }

  // User by id / email
  public async getById (req: Request, res: Response): Promise<Response> {
    try {
      // const { email } = res.locals.decodedToken
      const { id } = req.params
      const user = await UsersRepository.getById(Number(id))
      return res.json({ user })
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }

  // User by id / email
  public async getByEmail (req: Request, res: Response): Promise<Response> {
    try {
      // const { email } = res.locals.decodedToken
      const { email } = req.params
      const user = await UsersRepository.getByEmail(email)
      return res.json({ user })
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }
}

export default new UsersController()
