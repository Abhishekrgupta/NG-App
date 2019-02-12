import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-error-component',
    template:` <h2> Error Component</h2>
    <div class="container">{{messageE}}</div>`
})
export class ErrorComponent implements OnInit {
    messageE:string
    constructor() {
        this.messageE = " In error Component";
     }

    ngOnInit(): void { }
}
