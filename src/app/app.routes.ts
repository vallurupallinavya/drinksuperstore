import { Routes } from '@angular/router';

export const routes: Routes = [
{ path: '', redirectTo: 'landing-page', pathMatch: 'full' },
{ path: 'sign-up' , loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule) },
{ path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(module => module.CheckoutModule)},
{ path: 'landing-page', loadChildren: () => import('./landing-page/landing-page.module').then(module => module.LandingPageModule)},
{ path: 'new-arrivals', loadChildren: () => import('./landing-page/landing-page.module').then(module => module.LandingPageModule)}
];
