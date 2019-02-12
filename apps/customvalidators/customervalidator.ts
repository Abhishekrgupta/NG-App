import { AbstractControl } from "@angular/forms";

export class NumericNonNegativeValidator {
  // 1. static method
  // 2. i/p parameter must be used carefully
  // 3. return type is "any"
  static checkVal(ctrl: AbstractControl): any {
    if (parseInt(ctrl.value) > 0) {
      return null; // valid
    } else {
      return { invalid: true }; // imvalid
    }
  }
}

export class CheckCase {
  // 1. static method
  // 2. i/p parameter must be used carefully
  // 3. return type is "any"
  static firstUpperCase(ctrl: AbstractControl): any {
    
    let val = ctrl.value;
    let v =  val.charAt(0);
    if (v=== v.toUpperCase()) {
      return null; // valid
    } else {
      return { invalid: true }; // imvalid
    }
  }
  static towspaces(ctrl:AbstractControl):any{
    let val1: string = ctrl.value;
    let c:number = 0
    for(let i=0 ; i<val1.length; i++){
      if(val1[i]==" ")
      {
        c++;
      }
    }
    if(c <= 2){
      return null
    }
    else{return { spaces: true}}

  }

  static notEmpty(val:AbstractControl):any{
    let val1 : string = val.value;
   
     if(val1==""){
       return { invalid:true }
     }
     else{return null}
 
   }


}