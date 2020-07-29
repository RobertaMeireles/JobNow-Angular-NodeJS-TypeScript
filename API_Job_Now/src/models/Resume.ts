import Experience from './Experience'

export default class Resume {
    id?:number;
    email: string;
    name: string;
    address: string;
    birthday: string;
    children: string;
    civil: string;
    interest: string;
    education: string;
    language: string;
    experiences?: Experience[];
    userId:number;

    constructor (email: string,
      name: string,
      address: string,
      birthday: string,
      children: string,
      civil: string,
      interest: string,
      education: string,
      language: string,
      experiences: Experience[],
      userId:number) {
      this.email = email
      this.name = name
      this.address = address
      this.birthday = birthday
      this.children = children
      this.civil = civil
      this.interest = interest
      this.education = education
      this.language = language
      this.experiences = experiences
      this.userId = userId
    }
}
