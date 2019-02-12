import { Component, OnInit } from '@angular/core';
import { User } from "../../models/app.user.model";
import { UserService } from "../../services/app.users.service";
import { Response } from "@angular/http";
@Component({
    selector: 'app-register-component',
    templateUrl: './app.registration.view.html'
})
export class RegisterComponent implements OnInit {
   user: User;
   users: Array<User>;
   globalUsersArray: Array<User>;
    constructor(private serv: UserService) { 
        this.user = new User("","");
        this.users =new Array<User>();
        this.globalUsersArray =new Array<User>();
    }

    ngOnInit(): void {}

     Signup():void {
        this.serv.getUserData().subscribe((response: Response) =>{
            this.globalUsersArray= response.json().data;
            // console.log(this.globalUsersArray);    
            for(let i = 0; i< this.globalUsersArray.length; i++){
                // console.log(this.globalUsersArray[i].UserId);
                // console.log(this.user.UserId);
                
                if(this.globalUsersArray[i].UserId == this.user.UserId){
                    alert("Username already exists");
                }          
            }
        }, err => {
            console.log(`Error Ocured ${err}`);
            
        });

        
        this.serv.postUserRegistrationData(this.user).subscribe((response: Response)=> {
            this.users.push(response.json().data);
            //console.log("User Data Entered" + response);
            // alert("User entered successfully");
            this.user =new User("","");
        }, err => {
           console.log(`Error Ocured ${err}`);
        });

    }
    Cancel(): void{
        this.user =new User("","");
    }
}
