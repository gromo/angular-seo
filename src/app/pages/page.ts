import { Router } from "@angular/router";
import { SeoService } from '../services/seo.service';
import { Injector } from '@angular/core';

export class Page {

  private router: Router;
  private seoService: SeoService;

  constructor(
    injector: Injector,
  ) {
    this.router = injector.get(Router);
    this.seoService = injector.get(SeoService);
  }

  redirectToNotFoundPage() {
    this.router.navigate(['404'], { skipLocationChange: true });
  }

  setCanonicalUrl(url: string) {
    this.seoService.setCanonicalUrl(url);
  }

  setDescription(description: string) {
    this.seoService.setDescription(description);
  }

  setNoIndex() {
    this.seoService.setNoIndex();
  }

  setTitle(title: string) {
    this.seoService.setTitle(title);
  }
}
