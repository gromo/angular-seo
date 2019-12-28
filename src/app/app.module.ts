import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DynamicComponent } from './pages/dynamic/dynamic.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PageAComponent } from './pages/page-a/page-a.component';
import { PageBComponent } from './pages/page-b/page-b.component';
import { RouterModule } from '@angular/router';

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
    {provide: 'window', useValue: () => window},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
