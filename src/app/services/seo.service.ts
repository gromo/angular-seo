import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeoService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ){}

  isNoIndex(): boolean {
    const meta = this.document.head.querySelector('meta[name="robots"]');
    return meta && meta.getAttribute('content').indexOf('noindex') > -1;
  }

  removeCanonicalUrl(){
    const link = this.document.head.querySelector('link[rel="canonical"]');
    if (link) {
      this.document.head.removeChild(link);
    }
  }

  setCanonicalUrl(url: string){
    if (!this.document || !this.document.head || this.isNoIndex()) {
      return;
    }

    let link = this.document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url.toString());
  }

  setDescription(description: string){
    this.setMetaContent('description', description);
  }

  setNoIndex(){
    // canonical url and noindex cannot live together:
    // https://www.seroundtable.com/google-noindex-rel-canonical-confusion-26079.html
    this.removeCanonicalUrl();

    this.setMetaContent('robots', 'noindex, follow');
  }

  setPermanentRedirect(url: string){
    this.setStatusCode('301');
    this.setMetaContent('prerender-header', 'Location: ' + url);
  }

  // https://prerender.io/documentation/best-practices
  setStatusCode(code: string){
    this.setMetaContent('prerender-status-code', code);
  }

  setTitle(title: string){
    let element = this.document.head.querySelector('title');
    if(!element){
      element = this.document.createElement('title');
      this.document.head.appendChild(element);
    }
    element.innerText = title;
  }

  private setMetaContent(name: string, content: string){
    let meta = this.document.head.querySelector('meta[name="' + name + '"]');
    if (!meta) {
      meta = this.document.createElement('meta');
      meta.setAttribute('name', name);
      this.document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }
}
