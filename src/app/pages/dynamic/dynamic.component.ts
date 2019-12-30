import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../page';

@Component({
  selector: 'app-dynamic',
  templateUrl: 'dynamic.component.html',
})
export class DynamicComponent extends Page implements OnInit {

  url: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private activatedRoute: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit() {
    this.activatedRoute.url.subscribe(() => {
      this.url = this.document.location.pathname;

      if (this.url.indexOf('/not-found') === 0) {
        this.redirectToNotFoundPage();
        return;
      }

      this.setTitle('Dynamic url: ' + this.url);
    });
  }

}
