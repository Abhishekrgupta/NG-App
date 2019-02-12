import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AppGaurdService  implements CanActivate{
    constructor(private _router : Router){

    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):boolean{
            var isTokenActive = sessionStorage.getItem("usertoken");
            if(isTokenActive=="" || isTokenActive==undefined){
                console.log("canActivate");
                alert("You are not allowed to view this page");
    
                this._router.navigate(["error"]);
                return false;
            }else{
                return true;
            }
           
            
        }
}