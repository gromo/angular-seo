import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: 'homepage.component.html',
})
export class HomepageComponent {

  pageCanonicalUrl = 'http://example.com';
  pageDescription = 'Homepage Description';
  pageTitle = 'Homepage';

}
