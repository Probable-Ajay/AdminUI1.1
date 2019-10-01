import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminComponent } from './controllers/admin/admin.component';
import { UserRegistrationComponent } from './controllers/user-registration/user-registration.component';
import { UserLoginComponent } from './controllers/user-login/user-login.component';
import { DashboardRoutesComponent } from './controllers/dashboard-routes/dashboard-routes.component';
import { ShoppingLeafComponent } from './controllers/shopping-leaf/shopping-leaf.component';
import { ShoppingStatsComponent } from './controllers/shopping-stats/shopping-stats.component';
import { PriceTrendsComponent } from './controllers/price-trends/price-trends.component';
import {FormsModule} from '@angular/forms';

// Protected Routes for Release...
// const appRoutes: Routes = [
//   { path: '', redirectTo: 'UserRegistrationComponent', data: { title: 'Encryption' }, pathMatch: 'full' },
//   { path: 'UserRegistrationComponent', component: UserRegistrationComponent },
//   { path: 'login', component: UserLoginComponent },
//   { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] },
//   { path: 'dashboard', component: DashboardRoutesComponent,
//     children: [
//       { path: '', redirectTo: 'shopLeaf', pathMatch: 'full' },
//       { path: 'shopLeaf', component: ShoppingLeafComponent, canActivate: [AuthGuardService] },
//       { path: 'shoppingStats', component: ShoppingStatsComponent, canActivate: [AuthGuardService] },
//       { path: 'priceTrends', component: PriceTrendsComponent, canActivate: [AuthGuardService] }
//     ]
//   }
// ];

//Unprotected Routes for Testing...
const appRoutes: Routes = [
  { path: '', redirectTo: 'UserRegistrationComponent', data: { title: 'Encryption' }, pathMatch: 'full' },
  { path: 'UserRegistrationComponent', component: UserRegistrationComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'dashboard', component: DashboardRoutesComponent,
    children: [
      { path: '', redirectTo: 'shopLeaf', pathMatch: 'full' },
      { path: 'shopLeaf', component: ShoppingLeafComponent },
      { path: 'shoppingStats', component: ShoppingStatsComponent },
      { path: 'priceTrends', component: PriceTrendsComponent },
      { path: 'admin', component: AdminComponent },
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    DashboardRoutesComponent,
    ShoppingLeafComponent,
    ShoppingStatsComponent,
    PriceTrendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
