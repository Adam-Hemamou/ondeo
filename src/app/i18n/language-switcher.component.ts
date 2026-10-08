import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Language, LanguageService } from './language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [NgFor, RouterLink],
  template: `
    <nav class="language-switcher" [attr.aria-label]="i18n.t.languageSwitcher">
      <a
        *ngFor="let language of languages"
        [routerLink]="i18n.pathFor(language.code)"
        [class.active]="i18n.lang === language.code"
        [attr.aria-current]="i18n.lang === language.code ? 'true' : null"
        [attr.aria-label]="language.name"
        [attr.lang]="language.code"
        [attr.hreflang]="language.code"
        (click)="i18n.choose(language.code)"
        >{{ language.code }}</a
      >
    </nav>
  `,
  styles: `
    .language-switcher {
      display: flex;
      align-items: center;

      a {
        position: relative;
        padding: 2px 6px;
        color: #6b6b6b;
        font-weight: 600;
        line-height: 1.2;
        text-decoration: none;
        text-transform: uppercase;
        // Trait jaune de la langue active, réservé pour éviter tout décalage
        border-bottom: 3px solid transparent;

        // Séparateur entre les deux langues
        & + a {
          margin-left: 9px;

          &::before {
            content: "";
            position: absolute;
            top: 15%;
            left: -5px;
            height: 70%;
            border-left: 1px solid #b5b5b5;
          }
        }

        &:hover {
          color: black;
        }

        &.active {
          color: black;
          border-bottom-color: #ffce08;
        }
      }
    }
  `,
})
export class LanguageSwitcherComponent {
  languages: { code: Language; name: string }[] = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
  ];

  constructor(public i18n: LanguageService) {}
}
