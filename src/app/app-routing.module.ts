import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FoodpageComponent} from "./foodpage/foodpage.component";
import {CartPageComponent} from "./cart-page/cart-page.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {NoResultComponent} from "./no-result/no-result.component";
import {NoCartComponent} from "./no-cart/no-cart.component";


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchItem',component:HomeComponent},
  {path:'tags/:tags',component:HomeComponent},
  {path:'food/:id',component:FoodpageComponent},
  {path:'cart-page', component:CartPageComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Cart',component:CartPageComponent},
  {path:'Login',component:LoginComponent},
  {path:'no-result', component:NoResultComponent  },
  {path:'no-cart', component:NoCartComponent  },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
