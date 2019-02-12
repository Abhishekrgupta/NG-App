import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./app.home.component";
import { AboutComponent } from "./app.about.component";
import { ContactComponent } from "./app.contact.component";
import { ErrorComponent } from "./app.error.component";
import { LoginComponent } from "./../jwtcomponent/app.login.component";
import { RegisterComponent } from "./../jwtcomponent/app.register.component";
import { AppGaurdService } from "./../../services/app.test.gaurd.service";
//define route table

const routes : Routes = [
    {path:"home", component: HomeComponent},
    {path:"about", component: AboutComponent},
    {path:"contact",
    component: ContactComponent,
    canActivate: [AppGaurdService]
    },
    {
        path: "",
        redirectTo:"home",
        pathMatch: "full"
    },
    {path:"error" , component: ErrorComponent}
]; 

//Register the route table with route of current NG APP
//when routing is provided to imports of NgModule, this will load router module with route table
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);