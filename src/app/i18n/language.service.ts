import { Injectable } from '@angular/core';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { en } from './en';
import { fr, Translations } from './fr';

export type Language = 'fr' | 'en';

const STORAGE_KEY = 'ondeo-lang';
const SITE_URL = 'https://www.ondeo-agency.com';
const TRANSLATIONS: Record<Language, Translations> = { fr, en };

// Chemin seul, sans paramètres, ancre ni barre oblique finale
function normalize(url: string): string {
  return url.split(/[?#]/)[0].replace(/(.)\/$/, '$1');
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  // La langue est celle de l'URL : /en et ses sous-pages sont en anglais
  private path = normalize(window.location.pathname);

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      // Avant la création de la page, pour qu'elle lise les bons textes
      if (event instanceof RoutesRecognized) {
        this.path = normalize(event.urlAfterRedirects);
        document.documentElement.lang = this.lang;
      }
      if (event instanceof NavigationEnd) {
        this.updateAlternateLinks();
      }
    });
  }

  get lang(): Language {
    return /^\/en(\/|$)/.test(this.path) ? 'en' : 'fr';
  }

  get t(): Translations {
    return TRANSLATIONS[this.lang];
  }

  // Adresse de la page affichée dans la langue demandée
  pathFor(lang: Language): string {
    const current = this.t.routes;
    const target = TRANSLATIONS[lang].routes;
    const page = (Object.keys(current) as (keyof typeof current)[]).find(
      (key) => current[key] === this.path
    );
    return page ? target[page] : target.home;
  }

  // Mémorise la langue choisie via le sélecteur
  choose(lang: Language) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Stockage indisponible : la langue suit simplement l'URL
    }
  }

  // À l'arrivée sur une page française, on rouvre la version anglaise si
  // c'est la langue mémorisée. Une adresse /en reste toujours en anglais.
  restoreChoice() {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      // Stockage indisponible
    }
    if (stored === 'en' && this.lang === 'fr') {
      this.router.navigateByUrl(
        this.pathFor('en') + window.location.search + window.location.hash,
        { replaceUrl: true }
      );
    }
  }

  private updateAlternateLinks() {
    const alternates = { fr: 'fr', en: 'en', 'x-default': 'fr' } as const;
    for (const [hreflang, lang] of Object.entries(alternates)) {
      let link = document.querySelector<HTMLLinkElement>(
        `link[rel="alternate"][hreflang="${hreflang}"]`
      );
      if (!link) {
        link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = hreflang;
        document.head.appendChild(link);
      }
      link.href = SITE_URL + this.pathFor(lang);
    }
  }
}
