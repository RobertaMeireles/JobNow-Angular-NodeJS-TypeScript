import { queryBuilder } from './../core/db'
import Position from './../models/Positions'

export default class PositionRepository {
  // All Positions
  public static getAll (): Promise<Position[]> {
    return queryBuilder
      .select()
      .from('positions')
  }

  // Positions by company
  public static getByEmail (email: string): Promise<Position[]> {
    return queryBuilder
      .select()
      .from('positions')
      .where('email', '=', email)
  }

  // Position by id
  public static getById (id: number): Promise<Position[]> {
    return queryBuilder
      .select()
      .from('positions')
      .where('id', '=', id)
      .first()
  }

  // Filter Position
  public static getFiltered (where:any): Promise<Position[]> {
    return queryBuilder
      .select()
      .from('positions')
      .where(where) // Exemplo: {category:1 , job:Front End, district:Aveiro}
  }

  // Register Position
  public static async add (email:string, name: string, title: string, category: string, city:string, resume:string): Promise<Position[]> {
    return queryBuilder.insert({
      email,
      name,
      title,
      category,
      city,
      resume
    }).into('positions')
  }

  // Delete Position
  public static async delete (id: number): Promise<any> {
    return queryBuilder('positions')
    .where('id', '=', id)
    .del()
  }


    // Delete Position
    public static async deleteuserpositionrelation (id: number): Promise<any> {
      return queryBuilder('userpositionrelation')
        .where('positionid', '=', id)
        .del()
    }

    // Delete Position
    public static async deletepositions (id: number): Promise<any> {
      return queryBuilder('positions')
      .where('id', '=', id)
      .del()
    }
}


