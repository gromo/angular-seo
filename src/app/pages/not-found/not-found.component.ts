import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-not-found',
  templateUrl: 'not-found.component.html',
})
export class NotFoundComponent {

  constructor(
    private seoService: SeoService,
  ){
    this.seoService.setStatusCode('404');
    this.seoService.setTitle('Page not found');
  }
}
