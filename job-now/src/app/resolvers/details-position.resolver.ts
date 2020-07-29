import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Position } from './../models-project/positions';
import { PositionService } from './../services-project/position/position.service';

@Injectable()
export class DetailsPositionResolver implements Resolve<Position> {
    constructor(private router: Router,
                private positionService:PositionService ) { }

    
    resolve(route: ActivatedRouteSnapshot): Observable<Position> {
        return this.positionService.getById(route.params['id']).pipe(
            catchError(error => {
                this.router.navigate(['/home']);
                console.log('--erro resolver--')
                console.log(error)
                return of(null);
            })
        );
    }
}