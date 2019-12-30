
import { Component, OnInit } from '@angular/core';
import { Page } from '../page';

@Component({
  selector: 'app-homepage',
  templateUrl: 'homepage.component.html',
})
export class HomepageComponent extends Page implements OnInit {

  ngOnInit() {
    this.setTitle('Homepage');
    this.setDescription('Homepage Description');
    this.setCanonicalUrl('http://example.com');
  }
}
