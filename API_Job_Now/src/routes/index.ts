import { Router } from 'express'
import AuthController from '../controllers/auth.controller'
import PositionController from '../controllers/position.controller'
import ResumeController from '../controllers/resume.controller'
import ApplyController from '../controllers/apply.controller'
import UsersController from '../controllers/users.controller'

const router = Router()
// ------------------Auth----------------------
router.post('/auth/login', AuthController.login)
router.post('/auth/register', AuthController.signUp)

// --------------User--------------------------
router.get('/user', UsersController.users)
router.get('/user/id/:id', UsersController.getById)
router.get('/user/email/:email', UsersController.getByEmail)

// --------------Positions----------------------
router.post('/positions', PositionController.add)
router.get('/positions', PositionController.getAll)
router.get('/positions/id/:id', PositionController.getById)
router.get('/positions/email/:email', PositionController.getByEmail)
router.get('/positions/getfiltered', PositionController.getFiltered)
router.delete('/positions/delete/:id', PositionController.delete)

// ----------------Resume------------------------
router.get('/resumes/idUser/:id', ResumeController.getByIdUser)
router.get('/resumes/idResume/:id', ResumeController.getByIdResume)
router.get('/resumes', ResumeController.getAll)
router.post('/resumes', ResumeController.addResume)
router.post('/resumes/experiences', ResumeController.addExperience)
router.get('/resumes/interest', ResumeController.getByInterest)
router.put('/resumes/update/resume/:id', ResumeController.updateResume)
router.put('/resumes/update/experience/:id', ResumeController.updateExperience)

// --------------Apply---------------------------
router.post('/apply', ApplyController.apply)
router.get('/apply/list/:id', ApplyController.getApply)

export default router
