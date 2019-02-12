import { Component, OnInit } from '@angular/core';
import { Product, Categories } from "./app.product.model";
import { ProductLogic } from "./app.product.logic"

@Component({
    selector: 'app-product-component',
    templateUrl: './app.product.view.html'
    
})
export class ProductComponent implements OnInit {
    product: Product;
    private logic: ProductLogic;
    products: Array<Product>;
    categories = Categories;
    tableHeaders : Array<string>;
    isChecked: Boolean;
    constructor() {
        this.product = new Product(0,"","",0);
        this.logic = new ProductLogic();
        this.products = new Array<Product>();
        this.tableHeaders= new Array<string>();
        this.isChecked = false;
     }
    //ngOnInit is component lifecycle interface
    //the method will be executed immediatly  after constructor
    ngOnInit(): void { 
        //read all proerty of product class and push them in table hearder array;
        for(let p in this.product){
            this.tableHeaders.push(p);
        }
        this.products = this.logic.getProducts();
    }

    clear(): void {
        this.product =new Product(0,"","",0);
     }

     save(): void {
        this.products = this.logic.saveProducts(this.product);
        // alert(JSON.stringify(this.products));
     }

     getSelectedRow( p: Product) : void{
         //Create a deep copy of selected product
         //assign that copy to this.product
         this.product = Object.assign({} , p);


     }

     getChecked(){
         
     }
}
