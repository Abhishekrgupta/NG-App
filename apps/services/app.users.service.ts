import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { User } from "./../models/app.user.model";
@Injectable()
export class UserService {
    url: String;
    constructor(private http : Http ){
        this.url ="http://localhost:4070/";
    }

    getUserData(): Observable<Response>{
        let resp: Observable<Response>;
        resp = this.http.get(`${this.url}api/users`);
        return resp;

    }

    postUserRegistrationData(usrSignUp: User): Observable<Response>{
        let resp : Observable<Response>;
        let header: Headers = new Headers({"Content-Type": "application/json"});
        let options : RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.post(`${this.url}api/users`,JSON.stringify(usrSignUp),options);
        return resp;
    }

    postUserSignInData(usrSignin: User): Observable<Response>{
        console.log(">>>>>>>>>>>>");
        
        let resp : Observable<Response>;
        let header: Headers = new Headers({"Content-Type": "application/json"});
        let options : RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.post(`${this.url}api/users/auth`,JSON.stringify(usrSignin),options);
        console.log(resp);
        
        return resp;
    }
}