import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PageAComponent } from './pages/page-a/page-a.component';
import { PageBComponent } from './pages/page-b/page-b.component';
import { DynamicComponent } from './pages/dynamic/dynamic.component';
import { SeoPermanentRedirectGuard } from './services/seo.permanent-redirect.guard';

const seoPermanentRedirectTo = '301/';

const routes: Routes = [
  // legacy redirects
  {
    path: 'legacy-page-a',
    redirectTo: seoPermanentRedirectTo + 'page-a', // url shouldn't start with "/" to preserve URL query params
  },
  {
    path: '301',
    children: [
      {
        path: '**',
        canActivate: [SeoPermanentRedirectGuard],
        component: HomepageComponent, // component is not important as it will never be used
      },
    ],
  },
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: 'page-a',
    component: PageAComponent,
  },
  {
    path: 'page-b',
    component: PageBComponent,
  },
  {
    path: '**',
    component: DynamicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
