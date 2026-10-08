import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { ConsentService } from '../../consent/consent.service';
import { LegalLinksComponent } from '../../legal-links/legal-links.component';
import { LanguageSwitcherComponent } from '../../i18n/language-switcher.component';

export const routeMeta: RouteMeta = {
  title: 'Privacy policy | ONDEO',
  meta: [
    {
      name: 'description',
      content:
        'Privacy policy for the ONDEO website: data collected, third-party services, cookies and user rights.',
    },
  ],
};

// Version anglaise de politique-confidentialite.page
@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink, LegalLinksComponent, LanguageSwitcherComponent],
  templateUrl: './privacy-policy.page.html',
})
export default class PrivacyPolicyComponent implements OnInit {
  constructor(public consent: ConsentService) {}

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
