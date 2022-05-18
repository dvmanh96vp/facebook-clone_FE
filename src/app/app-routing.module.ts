import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserModule } from './pages/user/user.module';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/user/user.module').then((m) => UserModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => HomeModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
