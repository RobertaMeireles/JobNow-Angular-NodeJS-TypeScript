import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Resume } from './../models-project/resume';
import { LoginService } from './../services-project/login/login.service';
import { User } from './../models-project/users';
import { CurriculumService } from 'src/app/services-project/curriculum/curriculum.service';

@Injectable()
export class CurriculumCompanyResolver implements Resolve<Resume> {
    constructor(private curriculumService: CurriculumService, private router: Router,
        private loginService:LoginService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Resume> {
        return this.curriculumService.getByIdResume(route.params['id']).pipe(
            catchError(error => {
                this.router.navigate(['/home']);
                console.log(error)
                return of(null);
            })
        );
    }
}