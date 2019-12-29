import { Component } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-page-b',
  templateUrl: 'page-b.component.html',
})
export class PageBComponent {

  constructor(
    private seoService: SeoService,
  ){
    this.seoService.setNoIndex();
    this.seoService.setTitle('Page B: noindex');
  }
}
