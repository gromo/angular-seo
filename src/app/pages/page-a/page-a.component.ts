import { Component, Injector } from '@angular/core';
import { Page } from '../page';

@Component({
  selector: 'app-page-a',
  templateUrl: 'page-a.component.html',
})
export class PageAComponent extends Page {

  constructor(
    injector: Injector,
  ) {
    super(injector);

    this.setCanonicalUrl('http://example.com/page-a');
    this.setTitle('Page A');
  }

}
