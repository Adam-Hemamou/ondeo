import { Component, HostListener } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { VideoPresComponent } from '../video-pres/video-pres.component';
import { NgIf } from '@angular/common';
import { KeyFigureComponent } from '../key-figure/key-figure.component';
import { VideoCarrouselComponent } from '../video-carrousel/video-carrousel.component';
import { StepCardsComponent } from '../step-cards/step-cards.component';
import { PodcastSectionComponent } from '../podcast-section/podcast-section.component';
import { MotionSectionComponent } from '../motion-section/motion-section.component';

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
  ],
  template: `
    <header>
      <app-nav></app-nav>
    </header>

    <main>
      <h1>
        Des <span class="highlighted">vidéos</span> ultracaptivantes pour
        séduire votre <span class="highlighted">audience.</span>
      </h1>
      <p class="desc">
        Podcasts, <span class="bolded">vidéos promotionnelles</span> ou motion
        design, nous sommes à vos côtés à chaque étape de votre projet, jusqu'à
        ce que vous soyez
        <span class="bolded">100% satisfait.</span>
      </p>

      <app-video-pres [isMobile]="isMobile"></app-video-pres>
      <app-key-figure [isMobile]="isMobile"></app-key-figure>
      <app-video-carrousel [isMobile]="isMobile"></app-video-carrousel>
      <app-step-cards></app-step-cards>
      <app-podcast-section></app-podcast-section>
      <app-motion-section></app-motion-section>
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
