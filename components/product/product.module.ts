// Core Dependencies
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// configuration and services
import { ProductRoutes } from "./product.routing";

// Components


import { ProductComponent } from "./product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { CartProductsComponent } from "./cart-products/cart-products.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductRoutes),
    
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    AddProductComponent,
    ProductDetailComponent,
    CartProductsComponent,
    ,
  ],
})
export class ProductModule {}
