import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { VideoPresComponent } from '../video-pres/video-pres.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, VideoPresComponent],
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

      <app-video-pres></app-video-pres>
    </main>
  `,
})
export default class HomeComponent {}
