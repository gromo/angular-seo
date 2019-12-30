import { Router } from "@angular/router";
import { AppInjector } from '../services/app-injector.service';
import { SeoService } from '../services/seo.service';

export class Page {

  protected router: Router;
  protected seoService: SeoService;

  constructor() {
    const injector = AppInjector.getInjector();

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
