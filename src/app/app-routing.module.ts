import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./controllers/admin";
import { UserRegistrationComponent } from "./controllers/user-registration";
import { UserLoginComponent } from "./controllers/user-login";
import { DashboardRoutesComponent } from "./controllers/dashboard-routes";
import { ShoppingLeafComponent } from "./controllers/shopping-leaf";
import { ShoppingStatsComponent } from "./controllers/shopping-stats";
import { PriceTrendsComponent } from "./controllers/price-trends";
import { MockingGroundComponent } from "./controllers/mocking-ground";
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
  {
    path: "registration",
    component: UserRegistrationComponent
  },
  { path: "requestDemo", component: RequestDemoComponent },
  { path: "login", component: UserLoginComponent },
  {
    path: "dashboard",
    component: DashboardRoutesComponent,
    children: [
      { path: "", redirectTo: "admin", pathMatch: "full" },
      { path: "shopPrice", component: ShoppingLeafComponent },
      { path: "shopStats", component: ShoppingStatsComponent },
      { path: "priceTrends", component: PriceTrendsComponent },
      { path: "admin", component: AdminComponent },
      { path: "manageusers", component: SubUserComponent },
      { path: "createsubuser", component: CreateSubUserComponent },
      { path: "mock", component: MockingGroundComponent }
    ]
  }
];

export const apiRoutingModule = RouterModule.forRoot(routes);
