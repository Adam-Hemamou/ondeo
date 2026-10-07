import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { ConsentService } from '../consent/consent.service';
import { LegalLinksComponent } from '../legal-links/legal-links.component';

export const routeMeta: RouteMeta = {
  title: 'Politique de confidentialité | ONDEO',
  meta: [
    {
      name: 'description',
      content:
        'Politique de confidentialité du site ONDEO : données collectées, services tiers, cookies et droits des utilisateurs.',
    },
  ],
};

@Component({
  selector: 'app-politique-confidentialite',
  standalone: true,
  imports: [RouterLink, LegalLinksComponent],
  templateUrl: './politique-confidentialite.page.html',
})
export default class PolitiqueConfidentialiteComponent implements OnInit {
  constructor(public consent: ConsentService) {}

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
