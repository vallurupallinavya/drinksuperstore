import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
{ path: '' , loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule) },

];
