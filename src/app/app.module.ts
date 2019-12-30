import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DynamicComponent } from './pages/dynamic/dynamic.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PageAComponent } from './pages/page-a/page-a.component';
import { PageBComponent } from './pages/page-b/page-b.component';
import { AppInjector } from './services/app-injector.service';
import { SeoInterceptor } from './services/seo.interceptor';

const pages = [
  HomepageComponent,
  DynamicComponent,
  NotFoundComponent,
  PageAComponent,
  PageBComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...pages,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SeoInterceptor, multi: true },
    { provide: 'window', useFactory: () => window },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    injector: Injector,
  ) {
    AppInjector.setInjector(injector);
  }

}
