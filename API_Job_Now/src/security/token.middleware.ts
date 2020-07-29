import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

export default class TokenMiddleware {
  public static async tokenVerify (req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const allowedPaths = [
      '/',
      '/auth/login',
      '/auth/register',
      '/contact',
      '/details-position/:id',
      '/positions/getfiltered'
    ]

    if (allowedPaths.includes(req.path)) {
      return next()
    }

    if (!req.headers.authorization) {
      return res.status(403).json({
        code: 403,
        messsage: 'No credentials sent!'
      })
    }

    try {
      const token = req.headers.authorization.split('Bearer ')[1]
      res.locals.decodedToken = verify(token, 'MyVerySecretKeyForThisToken')

      return next()
    } catch (err) {
      return res.status(403).json({
        code: 403,
        message: 'Invalid token!',
        error: err.message
      })
    }
  }
}
