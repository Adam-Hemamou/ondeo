import { Component, HostListener } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { VideoPresComponent } from '../video-pres/video-pres.component';
import { NgIf } from '@angular/common';
import { VideoCarrouselComponent } from '../video-carrousel/video-carrousel.component';
import { StepCardsComponent } from '../step-cards/step-cards.component';
import { PodcastSectionComponent } from '../podcast-section/podcast-section.component';
import { MotionSectionComponent } from '../motion-section/motion-section.component';
import { FormCallComponent } from '../form-call/form-call.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { FaqComponent } from '../faq/faq.component';
import { CalandlyComponent } from '../calandly/calandly.component';
import { LogosComponent } from '../logos/logos.component';
import { PromiseComponent } from '../promise/promise.component';
import { DeferRenderDirective } from './defer-render.directive';
import { scrollToSectionCal } from '../../utils/scrolls';

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
    FormCallComponent,
    TestimonialComponent,
    FaqComponent,
    CalandlyComponent,
    LogosComponent,
    PromiseComponent,
    DeferRenderDirective,
  ],
  template: `
    <header>
      <app-nav></app-nav>
    </header>

    <main>
      <div class="reverse">
        <div class="web-title">
          <h1>
            Des <span class="highlighted">vidéos</span> ultracaptivantes pour
            séduire votre <span class="highlighted">audience.</span>
          </h1>
          <p class="desc">
            Podcasts, <span class="bolded">vidéos promotionnelles</span> ou
            motion design, nous sommes à vos côtés à chaque étape de votre
            projet, jusqu'à ce que vous soyez
            <span class="bolded">100% satisfait.</span>
          </p>
          <div class="btn-rdv-container" *ngIf="!isMobile">
            <button class="rdv-btn" (click)="scrollToCalendly()">
              Prendre rendez-vous
            </button>
          </div>
        </div>

        <div class="web-video">
          <app-video-pres [isMobile]="isMobile"></app-video-pres>
        </div>
      </div>
      <!-- <app-key-figure [isMobile]="isMobile"></app-key-figure> -->
      <app-promise [isMobile]="isMobile"></app-promise>

      <app-video-carrousel
        id="videos-section"
        [isMobile]="isMobile"
      ></app-video-carrousel>
      <!-- <div appDeferRender (isVisible)="isAfterVideoCarrouselVisible = true"> -->
      <app-logos></app-logos>
      <!-- </div> -->
      <app-step-cards></app-step-cards>
      <!-- <div appDeferRender (isVisible)="afterMotionSection = true"> -->
      <app-podcast-section [isMobile]="isMobile"></app-podcast-section>
      <!-- </div> -->
      <app-motion-section [isMobile]="isMobile"></app-motion-section>
      <app-form-call></app-form-call>
      <app-testimonial
        id="testimonial-section"
        [isMobile]="isMobile"
      ></app-testimonial>
      <app-faq [isMobile]="isMobile"></app-faq>
      <app-calandly></app-calandly>
      <app-logos></app-logos>
      <p class="footer-text">2024 - Ondeo. Tous droits réservés.</p>
    </main>
  `,
})
export default class HomeComponent {
  isMobile: boolean = window.innerWidth < 750;

  isAfterVideoCarrouselVisible: boolean = true;
  afterMotionSection: boolean = true;

  scrollToCalendly() {
    scrollToSectionCal();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth < 750;
  }
}
