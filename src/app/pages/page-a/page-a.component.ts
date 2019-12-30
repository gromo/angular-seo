import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-page-a',
  templateUrl: 'page-a.component.html',
})
export class PageAComponent {

  constructor(
    private seoService: SeoService,
  ){
    this.seoService.setCanonicalUrl('http://example.com/page-a');
    this.seoService.setTitle('Page A');
  }

}
