import { Request, Response } from 'express'
import ApplyRepository from './../repositories/apply.repositories'
import { UsersRepository } from './../repositories/users.repository'
import User from './../models/User'

class ApplyController {
  // apply (Applicant Allowed)
  public async apply (req: Request, res: Response): Promise<Response> {
    try {
      const { positionsId } = req.body
      //const { userid, positionid } = req.body
      const { id } = res.locals.decodedToken
      const user:User = await UsersRepository.getById(id)
      if (user.type === 'applicant') {
        const apply = await ApplyRepository.add(Number(id), Number(positionsId))
        return res.status(201).json(apply)
      } else {
        return res.status(403).json({
          message: 'Forbidden'
        })
      }
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }

  // Get Apply by position (Company Allowed)
  public async getApply (req: Request, res: Response): Promise<Response> {
    try{
      const user_id = res.locals.decodedToken.id
      const { id } = req.params
      const user:User = await UsersRepository.getById(user_id)
      if (user.type === 'company') {
        const getApply = await ApplyRepository.getApply(Number(id))
        return res.json(getApply)
      } else {
        return res.status(403).json({
          message: 'Forbidden'
        })
      }
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }
}

export default new ApplyController()
