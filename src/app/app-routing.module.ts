import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gaurds/auth.gaurd';
import { UnAuthGuard } from './gaurds/unAuth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'dashboard',
    loadChildren : () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'profile',
    loadChildren : () => import('./profile/profile.module').then(m => m.ProfileModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    loadChildren : () => import('./login/login.module').then(m => m.LoginModule),
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
