import { queryBuilder } from './../core/db'
import Resume from '../models/Resume'
import Experience from '../models/Experience'

export default class ResumeRepository {
  // All Resumes
  public static async getAll (): Promise<any> {
    const cvs = []
    const resumes = await queryBuilder
      .select()
      .from('curriculum')

    for (const resume of resumes) {
      const experiences = await queryBuilder
        .select()
        .from('experiences')
        .where('curriculumid', '=', resume.id)

      const x = ({ ...resume, experiences })
      cvs.push(x)
    }
    return cvs
  }

  // Resume by idUser ( Applicant Allowed )
  public static async getByIdUser (id: number): Promise<any> {
    const resume = await queryBuilder
      .select()
      .from('curriculum')
      .where('userid', '=', id)
      .first()

    const experiences = await queryBuilder
      .select()
      .from('experiences')
      .where('curriculumid', '=', resume.id)

    return new Promise((resolve, reject) => {
      resolve({ ...resume, experiences })
    })
  }


    // Resume by idUser ( Company Allowed )
    public static async getByIdResume (id: number): Promise<any> {
      const resume = await queryBuilder
        .select()
        .from('curriculum')
        .where('id', '=', id)
        .first()
  
      const experiences = await queryBuilder
        .select()
        .from('experiences')
        .where('curriculumid', '=', resume.id)
  
      return new Promise((resolve, reject) => {
        resolve({ ...resume, experiences })
      })
    }

  // Filter Interest ( Company Allowed )
  public static async getByInterest (where:any): Promise<any> {
    console.log(where)
    const cvs = []
    const resumes = await queryBuilder
      .select()
      .from('curriculum')
      .where(where)
    for (const resume of resumes) {
        const experiences = await queryBuilder
          .select()
          .from('experiences')
          .where('curriculumid', '=', resume.id)
  
        const x = ({ ...resume, experiences })
        cvs.push(x)
      }
      return cvs
  }

  // Register Resume ( Applicant Allowed )
  public static async addResume (email:string, name: string, address: string, birthday: string, children:string, civil:string, interest:string, education:string, language:string, userid:Number): Promise<Resume[]> {
    return queryBuilder.insert({
      email,
      name,
      address,
      birthday,
      children,
      civil,
      interest,
      education,
      language,
      userid
    }).into('curriculum')
  }

  // Register Experience ( Applicant Allowed )
  public static async addExperience (companyname:string, functioncompany:string, work:string, datestart:string, dateend:string, resume:string, curriculumid:Number): Promise<Experience[]> {
    return queryBuilder.insert({
      companyname,
      functioncompany,
      work,
      datestart,
      dateend,
      resume,
      curriculumid
    }).into('experiences')
  }

  // Update Resume ( Applicant Allowed )
  public static async updateResume (name:string, address:string, birthday:string, children:string, civil:string, interest:string, education:string, language:string, id:number): Promise<Resume[]> {
    return queryBuilder('curriculum')
      .where('id', '=', id)
      .update({
        name,
        address,
        birthday,
        children,
        civil,
        interest,
        education,
        language
      })
  }

  // Update Experience ( Applicant Allowed )
  public static async updateExperience (companyname:string, functioncompany:string, work:string, datestart:string, dateend:string, resume:string, id:Number): Promise<Experience[]> {
    return queryBuilder('experiences')
      .where('id', '=', id)
      .update({
        companyname,
        functioncompany,
        work,
        datestart,
        dateend,
        resume
      })
  }
}
