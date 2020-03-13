import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'xx-xxxxx-xx',
          {
            'page_path': event.urlAfterRedirects
          }
        );
      }
    }
    )
  }
}
