import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { LegalLinksComponent } from '../legal-links/legal-links.component';
import { LanguageSwitcherComponent } from '../i18n/language-switcher.component';

export const routeMeta: RouteMeta = {
  title: 'Mentions légales | ONDEO',
  meta: [
    {
      name: 'description',
      content:
        'Mentions légales du site ONDEO : éditeur, hébergeur, propriété intellectuelle et contact.',
    },
  ],
};

@Component({
  selector: 'app-mentions-legales',
  standalone: true,
  imports: [RouterLink, LegalLinksComponent, LanguageSwitcherComponent],
  templateUrl: './mentions-legales.page.html',
})
export default class MentionsLegalesComponent implements OnInit {
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
