import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component'; // Adjust import paths as needed
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: ProductsComponent }, // Default route to products list
  { path: 'product/:id', component: ProductDetailsComponent }, // Route for product details
  { path: 'cart', component: CartComponent }, // Route for cart
  { path: 'login', component: LoginComponent }, // Route for login
  { path: 'register', component: RegisterComponent }, // Route for registration
  { path: '**', component: NotFoundComponent } // Wildcard route for 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
