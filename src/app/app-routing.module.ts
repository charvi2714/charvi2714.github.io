import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'product-page/:productId',
    loadChildren: () => import('./product-page/product-page.module').then( m => m.ProductPagePageModule)
  },
  {
    path: 'address-list',
    loadChildren: () => import('./address-list/address-list.module').then( m => m.AddressListPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'cancelled-orders',
    loadChildren: () => import('./cancelled-orders/cancelled-orders.module').then( m => m.CancelledOrdersPageModule)
  },
  {
    path: 'order-page',
    loadChildren: () => import('./order-page/order-page.module').then( m => m.OrderPagePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],
   declarations: [
  ]
})
export class AppRoutingModule { }
