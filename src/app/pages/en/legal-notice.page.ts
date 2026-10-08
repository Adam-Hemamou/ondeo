import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { LegalLinksComponent } from '../../legal-links/legal-links.component';
import { LanguageSwitcherComponent } from '../../i18n/language-switcher.component';

export const routeMeta: RouteMeta = {
  title: 'Legal notice | ONDEO',
  meta: [
    {
      name: 'description',
      content:
        'Legal notice for the ONDEO website: publisher, hosting provider, intellectual property and contact.',
    },
  ],
};

// Version anglaise de mentions-legales.page
@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [RouterLink, LegalLinksComponent, LanguageSwitcherComponent],
  templateUrl: './legal-notice.page.html',
})
export default class LegalNoticeComponent implements OnInit {
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
