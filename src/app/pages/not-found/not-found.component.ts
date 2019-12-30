import { Component, OnInit } from '@angular/core';
import { Page } from '../page';

@Component({
  selector: 'app-not-found',
  templateUrl: 'not-found.component.html',
})
export class NotFoundComponent extends Page implements OnInit {

  ngOnInit() {
    this.seoService.setStatusCode('404');
    this.setTitle('Page not found');
  }
}
