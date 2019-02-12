//Angular Module file
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from "@angular/forms";
import {HttpModule } from "@angular/http"
// import all Standard Module
import { BrowserModule  } from '@angular/platform-browser';
import { platformBrowserDynamic  } from '@angular/platform-browser-dynamic';
// import all Components and Directives
import { SimpleComponent } from './components/simplecomponent/app.simple.component';
// import { ProductComponent } from '../apps/components/productcomponent/app.product.component';
import { ProductFormComponent } from '../apps/components/productformcomponent/app.productform.component';
import { SampleService } from "../apps/services/app.sample.service";
import{ SampleServiceComponent } from "./components/sampleService/app.sample.component.service";

//Using the data service in the for component communcation 
import { CategorySenderComponent } from "./components/componentService/app.categorysender.component";
import { ProductReceiverComponent  } from "./components/componentService/app.productreceiver.component";
import { CommunicationService } from "./components/componentService/app.communication.service";
//Using the inter service in the for component communcation 
import { CategoryComponent } from "./components/inputComponent/Category.component";
import { ProductComponent } from "./components/inputComponent/Product.component";
import { AboutComponent } from "./components/routesComponents/app.about.component";
import { ContactComponent } from "./components/routesComponents/app.contact.component";
import { HomeComponent } from "./components/routesComponents/app.home.component";
import { routing } from "./components/routesComponents/app.route.table";
import { jwtrouting } from "./components/jwtcomponent/app.jwtroute.table";
import { MainComponent } from "./components/routesComponents/app.main.component";
import { ErrorComponent } from "./components/routesComponents/app.error.component";
import { AppGaurdService } from "./services/app.test.gaurd.service";
import { RegisterComponent } from "./components/jwtcomponent/app.register.component";
import { LoginComponent } from "./components/jwtcomponent/app.login.component";
import { UserService } from "./services/app.users.service";
import { indexComponent } from './components/jwtcomponent/app.index.component';
import{ ProductServiceComponent} from "./../apps/components/jwtcomponent/app.jwtproductservice.component"
import { ProductService } from "../apps/services/app.jwtproduct.service";

import { PipeComponent } from "./components/appPipesComponent/app.pipe.component";
@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule,HttpModule, jwtrouting,routing],
    declarations: [  
        SampleServiceComponent ,
        AboutComponent,
        ContactComponent,
        HomeComponent,
        MainComponent,
        ErrorComponent,
        RegisterComponent,
        LoginComponent,
        ProductServiceComponent,
        indexComponent,
        PipeComponent

     
    ],
    providers: [AppGaurdService, UserService, ProductService],
    bootstrap: [
        // RegisterComponent,
        //indexComponent ,
       // ProductServiceComponent,
       PipeComponent
    ]
})
export class AppModule{

}

// Making AppModule as Bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);