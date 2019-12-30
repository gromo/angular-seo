import { Component, OnInit, Injector } from '@angular/core';
import { Page } from '../page';

@Component({
  selector: 'app-page-b',
  templateUrl: 'page-b.component.html',
})
export class PageBComponent extends Page implements OnInit {

  constructor(
    injector: Injector,
  ){
    super(injector);
  }

  ngOnInit(){
    this.setNoIndex();
    this.setTitle('Page B: noindex');
  }
}
