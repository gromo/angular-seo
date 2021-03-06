import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: 'dynamic.component.html',
})
export class DynamicComponent implements OnInit {

  url: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private seoService: SeoService,
  ) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe(() => {
      this.url = this.document.location.pathname;

      if (this.url.indexOf('/not-found') === 0) {
        this.router.navigate(['404'], { skipLocationChange: true });
        return;
      }

      this.seoService.setTitle('Dynamic url: ' + this.url);
    });
  }

}
