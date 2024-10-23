import { Component, HostListener } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { VideoPresComponent } from '../video-pres/video-pres.component';
import { NgIf } from '@angular/common';
import { KeyFigureComponent } from '../key-figure/key-figure.component';
import { VideoCarrouselComponent } from '../video-carrousel/video-carrousel.component';
import { StepCardsComponent } from '../step-cards/step-cards.component';
import { PodcastSectionComponent } from '../podcast-section/podcast-section.component';
import { MotionSectionComponent } from '../motion-section/motion-section.component';
import { FormCallComponent } from '../form-call/form-call.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { FaqComponent } from '../faq/faq.component';
import { CalandlyComponent } from '../calandly/calandly.component';
import { LogosComponent } from '../logos/logos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent,
    VideoPresComponent,
    NgIf,
    KeyFigureComponent,
    VideoCarrouselComponent,
    StepCardsComponent,
    PodcastSectionComponent,
    MotionSectionComponent,
    FormCallComponent,
    TestimonialComponent,
    FaqComponent,
    CalandlyComponent,
    LogosComponent,
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
            <button class="rdv-btn">Prendre rendez-vous</button>
          </div>
        </div>

        <div class="web-video">
          <app-video-pres [isMobile]="isMobile"></app-video-pres>
        </div>
      </div>
      <app-key-figure [isMobile]="isMobile"></app-key-figure>
      <app-video-carrousel [isMobile]="isMobile"></app-video-carrousel>
      <app-logos></app-logos>
      <app-step-cards></app-step-cards>
      <app-podcast-section [isMobile]="isMobile"></app-podcast-section>
      <app-motion-section [isMobile]="isMobile"></app-motion-section>
      <app-form-call></app-form-call>
      <app-testimonial [isMobile]="isMobile"></app-testimonial>
      <app-faq [isMobile]="isMobile"></app-faq>
      <app-calandly></app-calandly>
      <p class="follow-us">Rejoignez - nous</p>
      <app-logos></app-logos>
    </main>
  `,
})
export default class HomeComponent {
  isMobile: boolean = window.innerWidth < 750;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth < 750;
  }
}
