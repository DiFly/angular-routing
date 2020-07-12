import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './component/main/main.component';
import { MoreInfoComponent } from './component/more-info/more-info.component';
import { ProductComponent } from './component/product/product.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'more-info', component: MoreInfoComponent },
  { path: ':id', component: ProductComponent }
];

@NgModule({
  declarations: [MainComponent, MoreInfoComponent, ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class ProductsModule { }
