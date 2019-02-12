import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-about-component',
    template: ` <h2> About Component</h2>
    <div class="container">{{messageA}}</div>
    <br />
    <div class="container">The Value is: {{value}}</div>
    <br />
    <input type="button" value="Nav To Contact" (click) = "navigateToContact()" />
    `
})
export class AboutComponent implements OnInit {
    messageA: string;
    value: number;
//fetch router and Activated object from RouterModule  imported in NgModule using "routing"
    constructor(private router: Router, private act: ActivatedRoute) {
        this.messageA = " In About Component";
     }
     //explicitly routed to contact
     navigateToContact():void{
        this.router.navigate(["contact"]);
     }

     //Subscribe to parameter from ActivateRoute Injection
    ngOnInit(): void { 
        this.act.params.subscribe((params) => {
            this.value = params.id;
        });
    }
}
