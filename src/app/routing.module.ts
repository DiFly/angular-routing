import { ProductsModule } from './module/products/products.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

import { AuthService, AUTH_PROVIDERS } from './service/auth.service';

import { LoggedInGuard } from './guard/logged-in.guard';

import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { ProtectedComponent } from './component/protected/protected.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },


  { path: 'login', component: LoginComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [ LoggedInGuard ]
  },

  // nested
  {
    path: 'products',
    component: ProductsComponent,
    loadChildren: () => import('./module/products/products.module').then(m => m.ProductsModule)
  },

  { path: '**', component: PageNotFoundComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [HomeComponent, AboutComponent, ContactComponent, LoginComponent, ProtectedComponent, ProductsComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    AuthService,
    AUTH_PROVIDERS,
    LoggedInGuard
  ]
})
export class RoutingModule {}
