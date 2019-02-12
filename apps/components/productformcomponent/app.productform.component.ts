import { Component, OnInit } from "@angular/core";
import { Product, Categories } from "./app.product.model";
import { ProductLogic } from "./app.product.logic";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NumericNonNegativeValidator, CheckCase } from "./../../../apps/customvalidators/customervalidator"
import { UniqueProductId } from "./../../../apps/customvalidators/uniqueprodId"

@Component({
  selector: "app-productform-component",
  templateUrl: "./app.productform.view.html"
})
export class ProductFormComponent implements OnInit {
  product: Product;
  private logic: ProductLogic;
  products: Array<Product>;
  categories = Categories;
  tableHeaders: Array<string>;
  //define for group
  frmProduct: FormGroup;
  isChecked: Boolean;
  isSave: boolean;
  count: number;
  check: boolean;
  constructor() {
    this.product = new Product(0, "", "", 0, false);
    this.logic = new ProductLogic();
    this.products = new Array<Product>();
    this.tableHeaders = new Array<string>();
    this.isChecked = false;
    this.isSave = false;

    this.frmProduct = new FormGroup({
      ProdId: new FormControl(this.product.ProdId,Validators.compose([
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(2),
        Validators.maxLength(5),
        UniqueProductId.checkId
      ])
      ),
      ProdName: new FormControl(this.product.ProdName,
        Validators.compose([
            CheckCase.towspaces,
            CheckCase.firstUpperCase,
            Validators.pattern("[A-Z a-z]+")
        ])),
      CategoryName: new FormControl(this.product.CategoryName,
        Validators.compose([
        CheckCase.notEmpty
    ])),
      Price: new FormControl(this.product.Price,
        Validators.compose([NumericNonNegativeValidator.checkVal])
        )
    });
  }
  //ngOnInit is component lifecycle interface
  //the method will be executed immediatly  after constructor
  ngOnInit(): void {
    //read all proerty of product class and push them in table hearder array;
    for (let p in this.product) {
        if(p!='check'){
            this.tableHeaders.push(p);
        }
      
    }
    this.products = this.logic.getProducts();
  }

  clear(): void {
    this.product = new Product(0, "", "", 0, false);
  }

  save(): void {
    this.product = this.frmProduct.value;
    // alert(JSON.stringify(this.product));
    this.products = this.logic.saveProducts(this.product);
    // alert(JSON.stringify(this.products));

    this.isSave = false;
  }

  loadForm(): void {
    this.isSave = true;
  }

  getSelectedRow(p: Product): void {
    //Create a deep copy of selected product
    //assign that copy to this.product
    this.product = Object.assign({}, p);
  }
  getChecked(checkVal: Product): void {
    console.log(this.count);
    if (checkVal.check) {
      checkVal.check = false;
      this.count = this.count - 1;
    } else {
      checkVal.check = true;
      this.count = this.count + 1;
    }
    if (this.count == this.products.length) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
    
  }

  doAllChecks(): void {
    if (this.isChecked) {
      for (let prod of this.products) {
        prod.check = true;
      }

      this.count = this.products.length;
    } else {
      for (let prod of this.products) {
        prod.check = false;
      }

      this.count = 0;
    }
  }

  deleteSelected(): void{
      let prodIndex: Array<number> = new Array<number>();
      for(let p of this.products){
          if(p.check){
              prodIndex.push(this.products.indexOf(p));
          }
      }

      for(let i = prodIndex.length - 1; i>=0;i--){
          this.products.splice(prodIndex[i],1);
      }

  }


}
