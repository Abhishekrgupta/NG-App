import { AbstractControl } from "@angular/forms";
import { ProductLogic } from "../components/productformcomponent/app.product.logic";

export class UniqueProductId {
  // 1. static method
  // 2. i/p parameter must be used carefully
  // 3. return type is "any"
  static checkId(ctrl: AbstractControl): any {
    var product = new ProductLogic();
   //var newProd = product.getProducts();
    if(product.getProductById(ctrl.value)){
      return null; // valid 
    }
    else{
      return { invalid: true };// invalid
    }
   /* console.log(newProd);
    
    console.log(typeof(ctrl.value));
    
    for(let p of newProd ){
      console.log(p);
      
    if ( == ctrl.value) {
      return { invalid: true };// invalid
    } else {
      return null; // valid 
    }
  }*/
  }
}