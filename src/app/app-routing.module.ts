import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { LoginSuccessComponent } from "./components/login-success/login-success.component";
import { UserLoginComponent } from "./components/user-login/user-login.component";
import { UserRegisterComponent } from "./components/user-register/user-register.component";

const routes: Routes=[
    {
        path:"register",
        component:UserRegisterComponent
    },{
        path:"login",
        component:UserLoginComponent
    },{
        path:"loginSuccess",
        component:LoginSuccessComponent
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}