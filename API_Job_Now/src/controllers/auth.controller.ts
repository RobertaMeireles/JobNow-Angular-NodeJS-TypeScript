import { Request, Response } from 'express'
import AuthRepository from '../repositories/auth.repositories'
import ResumeRepository from './../repositories/resume.repositories';
import { UsersRepository } from './../repositories/users.repository';

class AuthController {
  // Login
  public async login (req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body
      const token = await AuthRepository.attemptLogin(email, password)
      const user = await UsersRepository.getByEmail(email)
      return res.json({ token, user })
    } catch (err) {
      return res.status(401).json({
        message: 'Bad credentials',
        error: err.message
      })
    }
  }

  // SignUp
  public async signUp (req: Request, res: Response): Promise<Response> {
    try {
      const { email, password, name } = req.body
      const [userId] = await AuthRepository.register(email, password, name)
      const address = ""
      const birthday = ""
      const children = ""
      const civil = ""
      const interest = ""
      const education = ""
      const language = ""

      if (userId > 0) {
        const resume = await ResumeRepository.addResume(email, name, address, birthday, children, civil, interest, education, language, userId)
        const token = await AuthRepository.attemptLogin(email, password)
        return res.json({ token })
      }

      return res.status(400).json()
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }
}

export default new AuthController()
