import { queryBuilder } from './../core/db'

export default class ApplyRepository {
  // apply
  public static async add (userid:number, positionid:number): Promise<any> {
    return queryBuilder.insert({
      userid,
      positionid
    }).into('userpositionrelation')
  }

  // get Apply by Position
  public static async getApply (id:number): Promise<any> {
    const cvsTotal = []
    const positions = await queryBuilder
      .select()
      .from('userpositionrelation')
      .where('positionid', '=', id)
    
    for(const position of positions){
      const resumes = await queryBuilder
      .select()
      .from('curriculum')
      .where('userid', '=', position.userid)
    
      for(const resume of resumes){
        const experiences = await queryBuilder
          .select()
          .from('experiences')
          .where('curriculumid', '=', resume.id)

        const x = ({ ...resume, experiences })
        cvsTotal.push(x)
      }
    }
    return cvsTotal
  }
}
