import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, } from '@angular/common/http';
import { Injectable, NgZone, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

/**
 * As prerender.io doesn't know exactly when page is fully rendered, we have to set special flag.
 *  For this purpose we count number of active HTTP requests: if there are no requests, then page is ready.
 *
 * 2 seconds timeout required for all elements to be properly rendered.
 *  If new request was initialised during these this period, interceptor will wait again until all requests are finished.
 */
@Injectable()
export class SeoInterceptor implements HttpInterceptor {

  private apiRequestsCount = 0;
  private timeout = null;

  constructor(
    @Inject('window') private window: Window,
    private ngZone: NgZone,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.indexOf('https://api.example.com/') !== 0) {
      return next.handle(request);
    }

    this.apiRequestsCount++;

    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.decreaseApiRequestsCount();
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.decreaseApiRequestsCount();
        throw error;
      }),
    );
  }

  private decreaseApiRequestsCount() {
    this.apiRequestsCount--;

    if (this.apiRequestsCount > 0) {
      return;
    }

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    // run outside angular zone to not block e2e tests
    this.ngZone.runOutsideAngular(() => {
      this.timeout = setTimeout(() => {
        this.timeout = null;

        if (this.apiRequestsCount <= 0) {
          this.window['prerenderReady'] = true;
        }
      }, 2000);
    });
  }
}
