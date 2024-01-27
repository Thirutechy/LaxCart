import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './Component/product-view/product-view.component';
import { ProductDetailComponent } from './Component/product-detail/product-detail.component';
import { CartPageComponent } from './Component/cart-page/cart-page.component';
import { OrderPageComponent } from './Component/order-page/order-page.component';

const routes: Routes = [
  {path:'',component:ProductViewComponent},
  {path:'product-detail/:productid',component:ProductDetailComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'order-page',component:OrderPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
