import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Position } from './../models-project/positions';
import { PositionService } from './../services-project/position/position.service';
import { Resume } from './../models-project/resume';

@Injectable()
export class AllApplyResolver implements Resolve<Resume[]> {
    constructor(private router: Router,
                private positionService:PositionService ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Resume[]> {
        return this.positionService.getUserAndPosition(route.params['id']).pipe(
            catchError(error => {
                this.router.navigate(['/home']);
                console.log(error)
                return of(null);
            })
        );
    }
}