import { Component, OnInit } from '@angular/core';
import {  Categories } from "./app.jwtproduct.model";
import { Product } from "./../../models/app.product.model";
import{ ProductService } from "./../../services/app.jwtproduct.service";
import { Response } from "@angular/http"
@Component({
    selector: 'app-jwtproduct-service-component',
    templateUrl: './app.jwtproduct.view.html'
    
})
export class ProductServiceComponent implements OnInit {
    product: Product;
 
    products: Array<Product>;
    categories = Categories;
    tableHeaders : Array<string>;
    isChecked: Boolean;
    userToken: string;
    constructor( private serv: ProductService) {
        this.product = new Product(0,"","","",0);
        
        this.products = new Array<Product>();
        this.tableHeaders= new Array<string>();
        this.isChecked = false;

        this.userToken = sessionStorage.getItem("usertoken");
     }
    //ngOnInit is component lifecycle interface
    //the method will be executed immediatly  after constructor
    ngOnInit(): void { 
        //read all proerty of product class and push them in table hearder array;
        for(let p in this.product){
            this.tableHeaders.push(p);
        }
        // this.products = this.logic.getProducts();

        //make call to REST API
        //console.log(this.userToken);
        
        this.serv.getData(this.userToken).subscribe((resp:Response) =>{
            this.products= resp.json().data;
            console.log(resp.json().data);
            
        }, err => {

            console.log(`Error Ocured ${err}`);
            
        })

        

    }



    clear(): void {
        this.product =new Product(0,"","","",0);
     }

    save(): void {
         //this.products = this.logic.saveProducts(this.product);
         // alert(JSON.stringify(this.products));
         this.serv.postData(this.product,this.userToken).subscribe((resp:Response) =>{
         //   this.products= resp.json().data;
            console.log(resp.json().data);
            this.products.push(resp.json().data)
        }, err => {

            console.log(`Error Ocured ${err}`);
            
        })
    }

    delete(): void {
        //this.products = this.logic.saveProducts(this.product);
        // alert(JSON.stringify(this.products));
        this.serv.deleteData(this.product.Product_id,this.userToken).subscribe((resp:Response) =>{
        //   this.products= resp.json().data;
          // console.log(resp.json().data);
         //  this.products.push(resp.json().data)
         //console.log(this.product.Product_id);
        //  this.serv.getData().subscribe((resp:Response) =>{
        //     this.products= resp.json().data;
        //     console.log(resp.json().data);
            
        // }, err => {
    
        //     console.log(`Error Ocured ${err}`);
            
        // });
        this.ngOnInit();
         
       }, err => {

           console.log(`Error Ocured ${err}`);
           
       });
   }

     getSelectedRow( p: Product) : void{
         //Create a deep copy of selected product
         //assign that copy to this.product
         this.product = Object.assign({} , p);


     }

     getChecked(){
         
     }
}
