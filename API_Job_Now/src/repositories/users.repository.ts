import { queryBuilder } from '../core/db/index'
import User from './../models/User'

export class UsersRepository {
  // All users
  public static async users (): Promise<User[]> {
    return queryBuilder
      .select()
      .from('users')
  }

  // user by id
  public static async getById (userId: number): Promise<User> {
    return queryBuilder
      .select()
      .from('users')
      .where('id', '=', userId)
      .first()
  }

  // user by email
  public static async getByEmail (email: string): Promise<User> {
    return queryBuilder
      .select()
      .from('users')
      .where('email', '=', email)
      .first()
  }
}
