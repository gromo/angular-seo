import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-homepage',
  templateUrl: 'homepage.component.html',
})
export class HomepageComponent {

  constructor(
    private seoService: SeoService,
  ){
    this.seoService.setTitle('Homepage');
    this.seoService.setDescription('Homepage Description');
    this.seoService.setCanonialUrl('http://example.com/');
  }
}
