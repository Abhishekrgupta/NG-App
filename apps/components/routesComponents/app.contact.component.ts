import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-component',
    template: ` <h2> Contact Component</h2>
    <div class="container">{{messageC}}</div>`
})
export class ContactComponent implements OnInit {
    messageC: string;
    constructor() {
        this.messageC = "  In Contact Component";
     }

    ngOnInit(): void { }
}
