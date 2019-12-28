import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    @Inject('window') private window: Window,
  ){}

  isNoIndex(): boolean {
    return false;
  }

  removeCanonicalUrl(){

  }

  setCanonialUrl(url: string){

  }

  setDescription(description: string){

  }

  setNoIndex(){
    // canonical url and noindex cannot live together:
    // https://www.seroundtable.com/google-noindex-rel-canonical-confusion-26079.html
    this.removeCanonicalUrl();


  }

  // https://prerender.io/documentation/best-practices
  setStatusCode(code: number){

  }

  setTitle(title: string){

  }
}
