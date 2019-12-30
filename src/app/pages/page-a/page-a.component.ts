import { Component } from '@angular/core';
import { Page } from '../page';

@Component({
  selector: 'app-page-a',
  templateUrl: 'page-a.component.html',
})
export class PageAComponent extends Page {

  constructor() {
    super();

    this.setCanonicalUrl('http://example.com/page-a');
    this.setTitle('Page A');
  }

}
