import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-component',
    template: ` <h2> Home Component</h2>
    <div class="container">{{messageH}}</div>`
})
export class HomeComponent implements OnInit {
    messageH: string;

    constructor() {
        this.messageH = " In Home Component";
     }

    ngOnInit(): void { }
}
