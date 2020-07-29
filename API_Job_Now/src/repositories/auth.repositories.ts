import { createHash } from 'crypto'
import User from './../models/User'
import { queryBuilder } from './../core/db'
import { sign } from 'jsonwebtoken'

export default class AuthRepository {
  // Login
  public static async attemptLogin (email: string, password: string): Promise<string> {
    password = createHash('sha256').update(password).digest('hex')
    const user: User = await queryBuilder
      .select()
      .from('users')
      .where('email', '=', email)
      .andWhere('password', '=', password)
      .first()

    return new Promise((resolve, reject) => {
      if (user) {
        const token = sign({
          exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 31),
          email: user.email,
          id: user.id,
          name:user.name,
          type:user.type
        }, 'MyVerySecretKeyForThisToken')
        resolve(token)
      }
      reject(new Error('Bad credentials'))
    })
  }

  // Register
  public static async register (email: string, password: string, name:string, type:string = 'applicant'): Promise<number[]> {
    password = createHash('sha256').update(password).digest('hex')

    return queryBuilder.insert({
      email,
      password,
      type,
      name
    }).into('users')
  }

}
