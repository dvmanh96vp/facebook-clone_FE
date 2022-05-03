import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user',
  },

  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => UserModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => HomeModule),
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
