import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { CookieConsentComponent } from './consent/cookie-consent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CookieConsentComponent],
  template: `
    <app-cookie-consent></app-cookie-consent>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    AOS.init({
      duration: 1200,
      once: true,
    });

    // L'URL canonique suit la page affichée
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        document
          .querySelector('link[rel="canonical"]')
          ?.setAttribute(
            'href',
            'https://www.ondeo-agency.com' + window.location.pathname
          );
      }
    });
  }
}
