import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import {RouterModule, Routes} from "@angular/router";
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  { path: 'categories', component: CategoriesComponent},
  { path: 'categories/:name', component: CategoryComponent },
  { path: 'categories/:name/:id', component: ProductComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
