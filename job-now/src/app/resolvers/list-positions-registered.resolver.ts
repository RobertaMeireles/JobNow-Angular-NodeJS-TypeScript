import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Position } from './../models-project/positions';
import { PositionService } from './../services-project/position/position.service';
import { LoginService } from './../services-project/login/login.service';

@Injectable()
export class ListPositionsResolver implements Resolve<Position[]> {
    constructor(private router: Router,
                private positionService:PositionService,
                private loginService:LoginService ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Position[]> {
        return this.positionService.getPositionsByCompanyEmail(this.loginService.loggedUser.email).pipe(
            catchError(error => {
                this.router.navigate(['/home']);
                console.log('--erro resolver--')
                console.log(error)
                return of(null);
            })
        );
    }
}