import { Component } from "@angular/core";



@Component({
  selector: "app-simple-component",
  template: `
    <h2>First Angular App Component!!!!!!</h2>
    <div class="container">
      <strong> {{ message }} </strong>
    </div>
    <br />
    <div class="container">{{ 10 + 20 }}</div>
    <br />
    <a type="text" [href]="url"> GoogleMaps </a> <br />
    <input type="number" class="form-control" [(ngModel)]="num1"  /> <br />
    <input type="number" class="form-control" [(ngModel)]="num2" /> <br />
    <input type="number" class="form-control" [(ngModel)]="result" /> <br />
    
    <input type="button" class="btn btn-success" value="ADD"  (click)="add()" />
    <input type="button" class="btn btn-success" value="SUB"  (click)="sub()" /><br />
    <input type="button" class="btn btn-success" value="MUL"  (click)="mul()" />
    <input type="button" class="btn btn-success" value="DIV"  (click)="div()" />
    <br />
  `

  // `<h2> First Angular App Component!!!!!!</h2>`
})
export class SimpleComponent {
  message: string;
  name: string;
  url: string;
  fullName : string;

  num1 : number;
  num2: number;
  result: number;
  
  constructor() {
    this.message = "this is angular 7";
    this.name = "Travis";
    this.num1 = 0;
    this.num2= 0;
    this.url =
      "https://www.google.com/search?q=google+maps&oq=goo&aqs=chrome.3.69i57j0l5.4282j0j7&sourceid=chrome&ie=UTF-8";
  }

  add(): number {
    // this.num1 = ;
    // this.num2= ;
    return this.result = this.num1 + this.num2;
  }
  sub(): number {
    // this.num1 = ;
    // this.num2= ;
    return this.result = this.num1 - this.num2; 
  }
  mul(): number {
    // this.num1 = ;
    // this.num2= ;
    return this.result = this.num1 * this.num2; 
  }

  div(): number {
    // this.num1 = ;
    // this.num2= ;
    return this.result = this.num1 / this.num2; 
  }
}
