import { Component, Input } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'seo-noindex',
  template: '',
})
export class SeoNoIndexComponent {

  constructor(
    private seoService: SeoService,
  ) {
    this.seoService.setNoIndex();
  }
}
