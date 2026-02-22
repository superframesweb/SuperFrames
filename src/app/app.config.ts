import { Routes, provideRouter } from '@angular/router';
import { permissionGuard } from './core/guards/permission.guard';
import { adminGuard } from './core/guards/admin.guard';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), canActivate: [permissionGuard('home')] },
  { path: 'film-details', loadComponent: () => import('./pages/film-details/film-details.component').then(m => m.FilmDetailsComponent), canActivate: [permissionGuard('film-details')] },
  { path: 'script-details', loadComponent: () => import('./pages/script-details/script-details.component').then(m => m.ScriptDetailsComponent), canActivate: [permissionGuard('script-details')] },
  { path: 'admin', loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent), canActivate: [adminGuard] },
  { path: '**', redirectTo: '/login' }
];

export const appRouterProvider = provideRouter(appRoutes);
