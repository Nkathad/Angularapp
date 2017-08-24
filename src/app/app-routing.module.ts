import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { MainProductListComponent } from './main-product-list/main-product-list.component';
import { FilterlistComponent } from './filterlist/filterlist.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'home-page', component: HomeComponent },
  { path: 'login-page', component: LoginComponent },
  { path: 'product-list', component: MainProductListComponent},
  { path: 'app-filterlist', component: FilterlistComponent},
  { path: 'app-register', component: RegisterComponent}


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, LoginComponent, MainProductListComponent, FilterlistComponent, RegisterComponent ]
