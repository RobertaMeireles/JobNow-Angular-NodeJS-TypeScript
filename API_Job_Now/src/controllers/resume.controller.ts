import { Request, Response } from 'express'
import ResumeRepository from './../repositories/resume.repositories'
import { UsersRepository } from './../repositories/users.repository'
import User from './../models/User'


class ResumeController {
  // All Resumes (Company Allowed)
  public async getAll (req: Request, res: Response): Promise<Response> {
    try {
      const user_id = res.locals.decodedToken.id
      const user:User = await UsersRepository.getById(user_id)

      if (user.type === 'company') {
        const resumes = await ResumeRepository.getAll()
        return res.json({ resumes })
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

  // Resume by id ( Applicant Allowed )
  public async getByIdUser (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      const { id } = res.locals.decodedToken
      const user:User = await UsersRepository.getById(id)
      if(user.type === 'applicant'){
        const resume = await ResumeRepository.getByIdUser(Number(id))
        return res.json({ resume })
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

    // Resume by id ( Company Allowed )
    public async getByIdResume (req: Request, res: Response): Promise<Response> {
      try {
        const user_id = res.locals.decodedToken.id
        const user:User = await UsersRepository.getById(user_id)
        const { id } = req.params
        if(user.type === 'company'){
          const resume = await ResumeRepository.getByIdResume(Number(id))
          return res.json({ resume })
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

  // Filter Resume by Interest (Company Allowed)
  public async getByInterest (req: Request, res: Response): Promise<Response> {
    try {
      const { id } = res.locals.decodedToken
      const user:User = await UsersRepository.getById(id)
      if(user.type === 'company'){
        const resumes = await ResumeRepository.getByInterest(req.query)
        return res.json({ resumes })
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

  // Create Resume ( Applicant Allowed )
  public async addResume (req: Request, res: Response): Promise<Response> {
    try {
      const { name, email } = res.locals.decodedToken
      const { id } = res.locals.decodedToken
      const { address, birthday, children, civil, interest, education, language } = req.body
      const user:User = await UsersRepository.getById(id)
      if(user.type === 'applicant'){
        const [postCurriculum] = await ResumeRepository.addResume(email, name, address, birthday, children, civil, interest, education, language, Number(id))
        return res.status(201).json({ postCurriculum })
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

  // Create Experrience ( Applicant Allowed )
  public async addExperience (req: Request, res: Response): Promise<Response> {
    try {
      const { id } = res.locals.decodedToken
      const { companyname, functioncompany, work, datestart, dateend, resume, curriculumid } = req.body  
      const user:User = await UsersRepository.getById(id)
      if(user.type === 'applicant'){
        const [postCurriculum] = await ResumeRepository.addExperience(companyname, functioncompany, work, datestart, dateend, resume, Number(curriculumid))
        return res.status(201).json({ postCurriculum })
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

  // Update Resume ( Applicant Allowed )
  public async updateResume (req: Request, res: Response): Promise<Response> {
    try {
      const user_id = res.locals.decodedToken.id
      const { name, address, birthday, children, civil, interest, education, language } = req.body
      const { id } = req.params
      const user:User = await UsersRepository.getById(user_id)
      if(user.type === 'applicant'){
        const updateResume = await ResumeRepository.updateResume(name, address, birthday, children, civil, interest, education, language, Number(id))
        return res.json(updateResume)
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

  // Update Experience ( Applicant Allowed )
  public async updateExperience (req: Request, res: Response): Promise<Response> {
    try {
      const user_id = res.locals.decodedToken.id
      const { companyname, functioncompany, work, datestart, dateend, resume, curriculumid } = req.body
      const { id } = req.params
      const user:User = await UsersRepository.getById(user_id)
      if(user.type === 'applicant'){
        const updateExperience = await ResumeRepository.updateExperience(companyname, functioncompany, work, datestart, dateend, resume, Number(id))
        return res.json(updateExperience)
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

export default new ResumeController()
