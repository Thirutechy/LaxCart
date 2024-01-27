import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductViewComponent } from './Component/product-view/product-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './Component/product-detail/product-detail.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { CartPageComponent } from './Component/cart-page/cart-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderPageComponent } from './Component/order-page/order-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductViewComponent,
    ProductDetailComponent,
    NavbarComponent,
    CartPageComponent,
    OrderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
