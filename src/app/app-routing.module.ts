import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./controllers/admin";
import { UserLoginComponent } from "./controllers/user-login";
import { DashboardRoutesComponent } from "./controllers/dashboard-routes";
import { AuthGuard } from "./_helpers";
import { UserRegistrationComponent } from "./controllers/user-registration";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    data: { title: "Encryption" },
    pathMatch: "full"
  },
  {
    path: "registration",
    component: UserRegistrationComponent
  },
  { path: "login", component: UserLoginComponent },
  {
    path: "dashboard",
    component: DashboardRoutesComponent,
    children: [
      { path: "", redirectTo: "admin", pathMatch: "full" },
      { path: "admin", component: AdminComponent }
    ]
  }
];

export const apiRoutingModule = RouterModule.forRoot(routes);
