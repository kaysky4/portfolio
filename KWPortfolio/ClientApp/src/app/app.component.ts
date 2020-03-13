import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare let gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
    constructor(private _router: Router) {
        this._router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                gtag('config', 'UA-136331702-1',
                    {
                        page_path: event.urlAfterRedirects
                    }
                );
            }
        });
    }
}
