import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class Resume {
    
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
    experiences: Experience[];
    userId:number;

    constructor(email: string, 
                name: string, 
                address: string, 
                birthday: string,  
                children: string,
                civil: string,
                interest: string,
                education: string,
                language: string,
                experiences: Experience[],
                userId:number
                ) {
                    
        this.email = email;
        this.name = name;
        this.address = address;
        this.birthday = birthday;
        this.children = children;
        this.civil = civil;
        this.interest = interest;
        this.education = education;
        this.language = language;
        this.experiences = experiences;
        this.userId = userId;
    }
}


export class Experience {
    
    id?:number;
    companyname: string;
    functioncompany: string;
    work: string;
    datestart: string;
    dateend: string;
    resume: string;
    curriculumid:number;

    constructor(
                id:Number,
                companyname: string,
                functioncompany: string,
                work: string,
                datestart: string,
                dateend: string,
                resume: string,
                curriculumid:number
                ) {
                    
        this.id = null;
        this.companyname = companyname;
        this.functioncompany = functioncompany;
        this.work = work;
        this.datestart = datestart;
        this.dateend = dateend;
        this.resume = resume;
        this.curriculumid = curriculumid;
    }

}

