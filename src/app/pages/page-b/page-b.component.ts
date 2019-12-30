import { Component, OnInit } from '@angular/core';
import { Page } from '../page';

@Component({
  selector: 'app-page-b',
  templateUrl: 'page-b.component.html',
})
export class PageBComponent extends Page implements OnInit {

  ngOnInit(){
    this.setNoIndex();
    this.setTitle('Page B: noindex');
  }
}
