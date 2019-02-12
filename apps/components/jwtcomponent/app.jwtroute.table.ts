import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "./app.login.component";
import { RegisterComponent } from "./app.register.component";
import { ProductServiceComponent } from "./app.jwtproductservice.component";
import { AppGaurdService } from "../../services/app.test.gaurd.service";
import { UserService } from "../../services/app.users.service";
//define route table

const routes : Routes = [
    {
        path:"", 
        component: LoginComponent
    },
    {
        path:"register",
        component: RegisterComponent
    },
    {
        path:"products",
        component: ProductServiceComponent,
        canActivate: [AppGaurdService]
    },
]; 

//Register the route table with route of current NG APP
//when routing is provided to imports of NgModule, this will load router module with route table
export const jwtrouting: ModuleWithProviders = RouterModule.forRoot(routes);