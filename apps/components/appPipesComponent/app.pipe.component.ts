import { Component, OnInit } from '@angular/core';
import { Product } from '../productformcomponent/app.product.model';

@Component({
    selector: 'app-pipe-component',
    template: `
    <div class="container">
        <strong>Angular Pipes</strong>
    </div>
    <br />
    <div class="container">
    <span> {{name | uppercase}}</span>
    <br />
    <span>{{ name | lowercase }}</span>
    </div>
    <br />
    <div class="container">
    <span> {{dob | date: "short"}}</span>
    <br />
    <span>{{ dob | date: "full"  | uppercase}}</span>
    <br />
    <span>{{ dob | date: "medium" }}</span>
    <br />
    <span>{{ dob | date: "MM/dd/yyyy" }}</span>
    </div>
    <br />
    <div class="container">
    <span> {{salary | currency: "INR"}}</span>
    </div>
    <br />
    <div class="container">
    <span> {{prd | json}}</span>
    </div>

    `
})
export class PipeComponent implements OnInit {
    name: string;
    dob: Date;
    salary: number;
    prd: Product;
    constructor() {
        this.name = "harbinger";
        this.dob = new Date(2019,1,2);
        this.salary = 20000;
        this.prd = new Product(123,"abc", "pqr", 2345, false);
     }

    ngOnInit(): void { }
}
