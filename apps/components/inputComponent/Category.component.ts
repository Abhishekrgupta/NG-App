import { Component, OnInit } from '@angular/core';
import {Category,Categories} from './category.model';
 
@Component({
    selector: 'category-data',
    templateUrl: './category.html'
})
export class CategoryComponent implements OnInit {
    categories=Categories;
    categotyName:string;
    constructor() {
        this.categotyName = "";
     }
     selectCategory(c: any){
         this.categotyName = c.categoryName;
         console.log(this.categotyName);
         
     }
 
    ngOnInit() { }
}