import { Component, Input } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'seo-title',
  template: '',
})
export class SeoTitleComponent {

  @Input()
  set title(title: string) {
    this.seoService.setTitle(title);
  }

  constructor(
    private seoService: SeoService,
  ) {
  }
}
