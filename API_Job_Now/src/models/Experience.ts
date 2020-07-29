import Resume from './Resume'

export default class Experience {
    id?:number;
    companyname: string;
    functioncompany: string;
    work: string;
    dateStart: string;
    dateEnd: string;
    resume: string;
    curriculumid: number

    constructor (
      id:Number,
      companyname: string,
      functioncompany: string,
      work: string,
      dateStart: string,
      dateEnd: string,
      resume: string,
      curriculumid: number) {
      this.id = null
      this.companyname = companyname
      this.functioncompany = functioncompany
      this.work = work
      this.dateStart = dateStart
      this.dateEnd = dateEnd
      this.resume = resume
      this.curriculumid = curriculumid
    }
}
