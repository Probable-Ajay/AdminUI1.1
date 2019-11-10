import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./controllers/admin";
import { UserLoginComponent } from "./controllers/user-login";
import { DashboardRoutesComponent } from "./controllers/dashboard-routes";
import { RequestDemoComponent } from "./controllers/request-demo";
import { SubUserComponent } from "./controllers/admin/sub-user/sub-user.component";
import { CreateSubUserComponent } from "./controllers/admin/create-sub-user/create-sub-user.component";
import { AuthGuard } from "./_helpers";

const routes: Routes = [
  {
    path: "",
    redirectTo: "requestDemo",
    data: { title: "Encryption" },
    pathMatch: "full"
  },
  { path: "requestDemo", component: RequestDemoComponent },
  { path: "login", component: UserLoginComponent },
  {
    path: "dashboard",
    component: DashboardRoutesComponent,
    children: [
      { path: "", redirectTo: "manageusers", pathMatch: "full" },
      { path: "admin", component: AdminComponent },
      { path: "manageusers", component: SubUserComponent },
      { path: "createsubuser", component: CreateSubUserComponent }
    ]
  }
];

export const apiRoutingModule = RouterModule.forRoot(routes);
