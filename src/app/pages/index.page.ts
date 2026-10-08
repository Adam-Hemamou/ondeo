import { Component, HostListener } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { VideoPresComponent } from '../video-pres/video-pres.component';
import { NgIf } from '@angular/common';
import { VideoCarrouselComponent } from '../video-carrousel/video-carrousel.component';
import { StepCardsComponent } from '../step-cards/step-cards.component';
import { PodcastSectionComponent } from '../podcast-section/podcast-section.component';
import { MotionSectionComponent } from '../motion-section/motion-section.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { FaqComponent } from '../faq/faq.component';
import { CalandlyComponent } from '../calandly/calandly.component';
import { PromiseComponent } from '../promise/promise.component';
import { scrollToSectionCal } from '../../utils/scrolls';
import { LogoBandComponent } from '../logo-band/logo-band.component';
import { LegalLinksComponent } from '../legal-links/legal-links.component';
import { RouteMeta } from '@analogjs/router';
import { LanguageService } from '../i18n/language.service';

// Reprend le titre et la description d'index.html, pour les rétablir au retour d'une autre page
export const routeMeta: RouteMeta = {
  title: 'Ondeo : Votre Agence Vidéo au meilleur prix',
  meta: [
    {
      name: 'description',
      content:
        'ONDEO, agence vidéo spécialisée en tournage, montage vidéo et motion design. Des vidéos captivantes pour séduire votre audience et booster votre communication.',
    },
  ],
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent,
    VideoPresComponent,
    NgIf,
    VideoCarrouselComponent,
    StepCardsComponent,
    PodcastSectionComponent,
    MotionSectionComponent,
    TestimonialComponent,
    FaqComponent,
    CalandlyComponent,
    PromiseComponent,
    LogoBandComponent,
    LegalLinksComponent,
  ],
  template: `
    <header>
      <app-nav></app-nav>
    </header>

    <main>
      <div class="reverse">
        <div class="web-title">
          <h1 [innerHTML]="i18n.t.hero.title"></h1>
          <p class="desc" [innerHTML]="i18n.t.hero.description"></p>
          <div class="btn-rdv-container" *ngIf="!isMobile">
            <button class="rdv-btn" (click)="scrollToCalendly()">
              {{ i18n.t.hero.cta }}
            </button>
          </div>
        </div>

        <div class="web-video">
          <app-video-pres [isMobile]="isMobile"></app-video-pres>
        </div>
      </div>
      <app-promise [isMobile]="isMobile"></app-promise>

      <app-video-carrousel
        id="videos-section"
        [isMobile]="isMobile"
      ></app-video-carrousel>
      <app-logo-band></app-logo-band>
      <app-step-cards></app-step-cards>
      <app-podcast-section [isMobile]="isMobile"></app-podcast-section>
      <app-motion-section [isMobile]="isMobile"></app-motion-section>
      <app-testimonial
        id="testimonial-section"
        [isMobile]="isMobile"
      ></app-testimonial>
      <app-faq [isMobile]="isMobile"></app-faq>
      <app-calandly></app-calandly>
      <app-logo-band></app-logo-band>
      <p class="footer-text">
        {{ i18n.t.footer.rights(currentYear) }}
      </p>
      <app-legal-links></app-legal-links>
    </main>
  `,
})
export default class HomeComponent {
  isMobile: boolean = window.innerWidth < 750;
  currentYear: number = new Date().getFullYear();

  constructor(public i18n: LanguageService) {}

  scrollToCalendly() {
    scrollToSectionCal();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth < 750;
  }
}
