import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export type ConsentChoice = {
  statistics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = 'ondeo-consent';
// Le choix est redemandé au bout de 6 mois
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182;

const GTM_ID = 'GTM-53HGTNZP';
const META_PIXEL_ID = '1437039147564113';
const LINKEDIN_PARTNER_ID = '7234650';

// Cookies propriétaires déposés par les traceurs, supprimés au retrait du consentement
const TRACKING_COOKIES = /^(_fbp|_fbc|_ga|_gid|_gcl|li_|ln_or)/;

function gtag(..._args: unknown[]) {
  // GTM attend l'objet `arguments`, pas un tableau
  (window as any).dataLayer.push(arguments);
}

@Injectable({ providedIn: 'root' })
export class ConsentService {
  // null tant que le visiteur n'a pas fait de choix
  readonly choice$ = new BehaviorSubject<ConsentChoice | null>(
    this.readStoredChoice()
  );
  readonly openPanel$ = new Subject<void>();

  bannerVisible = this.choice$.value === null;

  private gtmLoaded = false;
  private marketingLoaded = false;

  constructor() {
    if (this.choice) {
      this.apply(this.choice);
    }
  }

  get choice(): ConsentChoice | null {
    return this.choice$.value;
  }

  acceptAll() {
    this.save({ statistics: true, marketing: true });
  }

  refuseAll() {
    this.save({ statistics: false, marketing: false });
  }

  save(choice: ConsentChoice) {
    const previous = this.choice;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ...choice, date: Date.now() })
      );
    } catch {
      // Stockage indisponible : le choix vaut pour la visite en cours
    }
    this.bannerVisible = false;

    // Un traceur déjà chargé ne peut pas être déchargé : on repart d'une page propre
    const withdrawn =
      !!previous &&
      ((previous.statistics && !choice.statistics) ||
        (previous.marketing && !choice.marketing));
    if (withdrawn) {
      this.clearTrackingCookies();
      window.location.reload();
      return;
    }

    this.choice$.next(choice);
    this.apply(choice);
  }

  openPanel() {
    this.openPanel$.next();
  }

  private readStoredChoice(): ConsentChoice | null {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null');
      if (!stored || Date.now() - stored.date > MAX_AGE_MS) {
        return null;
      }
      return { statistics: !!stored.statistics, marketing: !!stored.marketing };
    } catch {
      return null;
    }
  }

  private apply(choice: ConsentChoice) {
    if (choice.statistics || choice.marketing) {
      this.updateGtm(choice);
    }
    if (choice.marketing) {
      this.loadMarketingTags();
    }
  }

  // GTM n'est chargé qu'après un consentement, et reçoit l'état de chaque
  // catégorie (Consent Mode) pour que ses balises le respectent.
  private updateGtm(choice: ConsentChoice) {
    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    const marketing = choice.marketing ? 'granted' : 'denied';
    const state = {
      analytics_storage: choice.statistics ? 'granted' : 'denied',
      ad_storage: marketing,
      ad_user_data: marketing,
      ad_personalization: marketing,
    };

    if (this.gtmLoaded) {
      gtag('consent', 'update', state);
    } else {
      this.gtmLoaded = true;
      gtag('consent', 'default', state);
      w.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      this.loadScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);
    }
    w.dataLayer.push({
      event: 'cookie_consent_update',
      consent_statistics: choice.statistics,
      consent_marketing: choice.marketing,
    });
  }

  private loadMarketingTags() {
    if (this.marketingLoaded) {
      return;
    }
    this.marketingLoaded = true;
    const w = window as any;

    // Meta Pixel
    if (!w.fbq) {
      const fbq: any = (w.fbq = function () {
        fbq.callMethod
          ? fbq.callMethod.apply(fbq, arguments)
          : fbq.queue.push(arguments);
      });
      if (!w._fbq) w._fbq = fbq;
      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = '2.0';
      fbq.queue = [];
      this.loadScript('https://connect.facebook.net/en_US/fbevents.js');
    }
    w.fbq('init', META_PIXEL_ID);
    w.fbq('track', 'PageView');

    // LinkedIn Insight
    w._linkedin_partner_id = LINKEDIN_PARTNER_ID;
    w._linkedin_data_partner_ids = w._linkedin_data_partner_ids || [];
    w._linkedin_data_partner_ids.push(LINKEDIN_PARTNER_ID);
    if (!w.lintrk) {
      w.lintrk = function (a: unknown, b: unknown) {
        w.lintrk.q.push([a, b]);
      };
      w.lintrk.q = [];
    }
    this.loadScript('https://snap.licdn.com/li.lms-analytics/insight.min.js');
  }

  private loadScript(src: string) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }

  private clearTrackingCookies() {
    const host = window.location.hostname;
    const domains = ['', host, `.${host}`, `.${host.replace(/^www\./, '')}`];
    document.cookie
      .split(';')
      .map((cookie) => cookie.split('=')[0].trim())
      .filter((name) => TRACKING_COOKIES.test(name))
      .forEach((name) => {
        domains.forEach((domain) => {
          document.cookie =
            `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/` +
            (domain ? `; domain=${domain}` : '');
        });
      });
  }
}
