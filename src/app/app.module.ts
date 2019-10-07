import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { AdminComponent } from "./controllers/admin/admin.component";
import { UserRegistrationComponent } from "./controllers/user-registration/user-registration.component";
import { UserLoginComponent } from "./controllers/user-login/user-login.component";
import { DashboardRoutesComponent } from "./controllers/dashboard-routes/dashboard-routes.component";
import { ShoppingLeafComponent } from "./controllers/shopping-leaf/shopping-leaf.component";
import { ShoppingStatsComponent } from "./controllers/shopping-stats/shopping-stats.component";
import { PriceTrendsComponent } from "./controllers/price-trends/price-trends.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SidebarModule } from "ng-sidebar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MockingGroundComponent } from "./controllers/mocking-ground/mocking-ground.component";
import { FlexLayoutModule } from "@angular/flex-layout";

import { A11yModule } from "@angular/cdk/a11y";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { PortalModule } from "@angular/cdk/portal";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatStepperModule } from "@angular/material/stepper";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTreeModule } from "@angular/material/tree";
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";

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
  {
    path: "",
    redirectTo: "registration",
    data: { title: "Encryption" },
    pathMatch: "full"
  },
  { path: "registration", component: UserRegistrationComponent },
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
      { path: "mock", component: MockingGroundComponent }
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
    PriceTrendsComponent,
    MockingGroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    SidebarModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,

    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    AngularMultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
