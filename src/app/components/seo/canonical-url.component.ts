import { DOCUMENT } from '@angular/common';
import { Component, Input, Inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'seo-canonical-url',
  template: '',
})
export class SeoCanonicalUrlComponent {

  @Input()
  set canonicalUrl(url: string) {
    this.seoService.setCanonicalUrl(url);
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private seoService: SeoService,
  ) {
    this.canonicalUrl = this.document.location.href.replace(/\/*\?.*/, '');
  }
}
