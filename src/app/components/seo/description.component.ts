import { Component, Input } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'seo-description',
  template: '',
})
export class SeoDescriptionComponent {

  @Input()
  set description(description: string) {
    this.seoService.setDescription(description);
  }

  constructor(
    private seoService: SeoService,
  ) {
  }
}
