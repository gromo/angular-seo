import { Component, Input } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'seo-status-code',
  template: '',
})
export class SeoStatusCodeComponent {

  @Input()
  set statusCode(statusCode: string) {
    this.seoService.setStatusCode(statusCode);
  }

  constructor(
    private seoService: SeoService,
  ) {
  }
}
