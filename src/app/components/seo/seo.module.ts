import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SeoCanonicalUrlComponent } from './canonical-url.component';
import { SeoDescriptionComponent } from './description.component';
import { SeoNoIndexComponent } from './noindex.component';
import { SeoStatusCodeComponent } from './status-code.component';
import { SeoTitleComponent } from './title.component';

const components = [
  SeoCanonicalUrlComponent,
  SeoDescriptionComponent,
  SeoNoIndexComponent,
  SeoStatusCodeComponent,
  SeoTitleComponent,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
  ],
})
export class SeoComponentsModule { }
