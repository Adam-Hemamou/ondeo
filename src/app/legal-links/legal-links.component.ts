import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsentService } from '../consent/consent.service';

@Component({
  selector: 'app-legal-links',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="legal-links" aria-label="Informations légales">
      <a routerLink="/mentions-legales">Mentions légales</a>
      <a routerLink="/politique-confidentialite"
        >Politique de confidentialité</a
      >
      <button type="button" (click)="consent.openPanel()">
        Gestion des cookies
      </button>
    </nav>
  `,
  styles: `
    .legal-links {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 6px 20px;
      padding: 0 12px 20px;
      font-size: 14px;

      a,
      button {
        color: #212121;
        text-decoration: underline;
      }

      button {
        border: none;
        background: none;
        font-size: inherit;
        cursor: pointer;
      }
    }
  `,
})
export class LegalLinksComponent {
  constructor(public consent: ConsentService) {}
}
