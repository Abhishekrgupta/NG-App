import { Component, OnInit } from '@angular/core';
import { User } from "../../models/app.user.model";
import { UserService } from "../../services/app.users.service";
import { Response } from "@angular/http";
import { Router } from '@angular/router';
@Component({
    selector: 'app-login-component',
    templateUrl: './app.login.view.html'
})
export class LoginComponent implements OnInit {
   user: User;
//    users: Array<User>;
//    globalUsersArray: Array<User>;
    constructor(private serv: UserService, private _router: Router) { 
        this.user = new User("","");
        // this.users =new Array<User>();
        // this.globalUsersArray =new Array<User>();
    }

    ngOnInit(): void {}

    login():void {
        this.serv.postUserSignInData(this.user).subscribe((resp: Response)=> {
            //this.users.push(response.json().data);
            console.log('/'+resp);
            console.log(resp.json().data);
            sessionStorage.setItem("usertoken", resp.json().data.token);
            this._router.navigate(['/products']);

        }, (err) => {
           console.log(`Error Ocured ${err}`);
        });

    }
    register(): void{
        this.user =new User("","");
        this._router.navigate(['/register']);
    }
}
