import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { Product } from "./../models/app.product.model";

@Injectable()
export class ProductService {
    url: String;
    constructor(private http: Http) {
     this.url = "http://localhost:4070/";
    }

    getData(usertoken: string): Observable<Response>{
        let resp: Observable<Response>;
        let header : Headers = new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer ' + usertoken
        });
        let options : RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.get(`${this.url}api/products`,options);
        return resp;
    }


    postData(prd: Product, usertoken: string): Observable<Response>{
        let resp: Observable<Response>;
        let header : Headers = new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer ' + usertoken
        });
        let options: RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.post(`${this.url}api/products`,JSON.stringify(prd),options);
        return resp;
    }

    putData( id: Number, prd: Product): Observable<Response>{
        let resp: Observable<Response>;
        let header : Headers = new Headers({"Content-Type":"application/json"});

        //request option 
        //collection of header values
        let options: RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.put(`${this.url}api/products/${id}`,JSON.stringify(prd),options);
        return resp;
    }

    deleteData( id: Number, usertoken: string ): Observable<Response>{
        let resp: Observable<Response>;
        let header : Headers = new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer ' + usertoken
        });
        let options: RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.delete(`${this.url}api/products/${id}`,options);
        return resp;
    }
}
