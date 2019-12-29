import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: 'dynamic.component.html',
})
export class DynamicComponent implements OnInit {

  url: string;

  constructor(
    @Inject('window') private window: Window,
    private router: Router,
    private seoService: SeoService,
  ){}

  ngOnInit(){
    this.url = this.window.location.pathname;
    if(this.url.indexOf('/not-found') === 0){
      this.router.navigate(['404'], {skipLocationChange: true});
    } else {
      this.seoService.setTitle('Dynamic url: ' + this.url);
    }
  }

}
