import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SeoService } from './seo.service';

@Injectable({
  providedIn: 'root',
})
export class SeoPermanentRedirectGuard implements CanActivate {

  constructor(
    private router: Router,
    private seoService: SeoService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UrlTree {
    const url = state.url.replace(/^\/301\//, '/');
    const permanentRedirectTo = 'http://example.com' + url.replace(/\?.*/, '');
    this.seoService.setPermanentRedirect(permanentRedirectTo);
    return this.router.parseUrl(url);
  }
}
