import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Resume } from './../models-project/resume';
import { CurriculumService } from 'src/app/services-project/curriculum/curriculum.service';


@Injectable()
export class ConsultApplyInterestResolver implements Resolve<Resume[]> {
    constructor(private router: Router,
                private curriculumService:CurriculumService ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Resume[]> {
        console.log(route.params['interest'])
        return this.curriculumService.getByInterest(route.params['interest']).pipe(
            catchError(error => {
                this.router.navigate(['/home']);
                console.log(error)
                return of(null);
            })
        );
    }
}