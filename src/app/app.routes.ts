import { Routes } from '@angular/router';

export const routes: Routes = [
{ path: '' , loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule) },
{ path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(module => module.CheckoutModule)}

];
