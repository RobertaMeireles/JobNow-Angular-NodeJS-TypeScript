import { Request, Response } from 'express'
import PositionRepository from './../repositories/position.repositories'
import { UsersRepository } from './../repositories/users.repository'
import User from './../models/User'

class PositionController {
  // All Positions (All Alowed)
  public async getAll (req: Request, res: Response): Promise<Response> {
    try {
      const positions = await PositionRepository.getAll()
      return res.json({ positions })
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }

    // All Positions by company (Company Allowed)
    public async getByEmail (req: Request, res: Response): Promise<Response> {
      try {
        const  user_id  = res.locals.decodedToken.id
        const { email } = req.params
        const user:User = await UsersRepository.getById(user_id)
        if (user.type === 'company') {
          const positions = await PositionRepository.getByEmail(email)
          return res.json({ positions })
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

  // Position by id (All Alowed)
  public async getById (req: Request, res: Response): Promise<Response> {
    // const { email } = res.locals.decodedToken
    const { id } = req.params
    try {
      const position = await PositionRepository.getById(Number(id))
      return res.json({ position })
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }

  // Filter Position (All Alowed)
  public async getFiltered (req: Request, res: Response): Promise<Response> {
    try {
      const positions = await PositionRepository.getFiltered(req.query)
      return res.json({ positions })
    } catch (err) {
      return res.status(400).json({
        message: 'Bad request',
        error: err.message
      })
    }
  }

  // Create Position (Company allowed)
  public async add (req: Request, res: Response): Promise<Response> {
    try {
      const  user_id  = res.locals.decodedToken.id
      const { decodedToken: { email, name } } = res.locals
      const { title, category, city, resume } = req.body
      const user:User = await UsersRepository.getById(user_id)
      if (user.type === 'company') {
        const [postPosition] = await PositionRepository.add(email, name, title, category, city, resume)
      return res.status(201).json({ postPosition })
      }else{
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

  // Delete Position (Company allowed)
  public async delete (req: Request, res: Response): Promise<Response> {
    try {
      const user_id  = res.locals.decodedToken.id
      const { id } = req.params
      const user:User = await UsersRepository.getById(user_id)
      if(user.type === 'company') {
        //await PositionRepository.delete(Number(id))
        await PositionRepository.deleteuserpositionrelation(Number(id))
        await PositionRepository.deletepositions(Number(id))
        return res.status(204).json()
      }else{
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

export default new PositionController()
