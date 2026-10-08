import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsentService } from '../consent/consent.service';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-legal-links',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="legal-links" [attr.aria-label]="i18n.t.footer.legalNav">
      <a [routerLink]="i18n.t.routes.legal">{{ i18n.t.footer.legal }}</a>
      <a [routerLink]="i18n.t.routes.privacy">{{ i18n.t.footer.privacy }}</a>
      <button type="button" (click)="consent.openPanel()">
        {{ i18n.t.footer.cookies }}
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
  constructor(
    public consent: ConsentService,
    public i18n: LanguageService
  ) {}
}
