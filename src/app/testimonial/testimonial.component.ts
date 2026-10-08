import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Autoplay, Pagination, SwiperOptions } from 'swiper';
import { Avis } from '../core/types/avis';
import { AvisCardComponent } from '../dump-components/avis-card/avis-card.component';
import { LanguageService } from '../i18n/language.service';

SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [NgIf, SwiperModule, AvisCardComponent],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent {
  @Input() isMobile!: boolean;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: { clickable: true },
  };

  testimonials1: Avis[] = [
    {
      ...this.i18n.t.testimonials.caisseEpargne,
      photo: '/photo-avis/caisse-epargne.jpg',
      expanded: false,
      showToggle: false,
    },
    {
      ...this.i18n.t.testimonials.sneakmart,
      photo: '/photo-avis/capture.png',
      expanded: false,
      showToggle: false,
    },
    {
      ...this.i18n.t.testimonials.arcachon,
      photo: '/photo-avis/arca.jpg',
      expanded: false,
      showToggle: false,
    },
  ];

  testimonials2: Avis[] = [
    {
      ...this.i18n.t.testimonials.danone,
      photo: '/photo-avis/capture-danone.png',
      expanded: false,
      showToggle: false,
    },
    {
      ...this.i18n.t.testimonials.docaposte,
      photo: '/photo-avis/philippe-docaposte.jpeg',
      expanded: false,
      showToggle: false,
    },
    {
      ...this.i18n.t.testimonials.frenchMed,
      photo: '/photo-avis/french-med.jpeg',
      expanded: false,
      showToggle: false,
    },
  ];

  testimonials3: Avis[] = [
    {
      ...this.i18n.t.testimonials.thatsYMedia,
      photo: '/photo-avis/nathanael-chouraqui.jpg',
      expanded: false,
      showToggle: false,
    },
    {
      ...this.i18n.t.testimonials.carlsberg,
      photo: '/photo-avis/carlsberg.jpg',
      expanded: false,
      showToggle: false,
    },
    {
      ...this.i18n.t.testimonials.wagmiTrends,
      photo: '/photo-avis/marine-adatto.jpeg',
      expanded: false,
      showToggle: false,
    },
  ];

  testimonials4: Avis[] = [
    {
      ...this.i18n.t.testimonials.skillsPlace,
      photo: '/photo-avis/skills_p.jpeg',
      expanded: false,
      showToggle: false,
    },
    {
      ...this.i18n.t.testimonials.storyW,
      photo: '/photo-avis/adeline-percept.jpeg',
      expanded: false,
      showToggle: false,
    },
    {
      ...this.i18n.t.testimonials.powellSoftware,
      photo: '/photo-avis/powell-software.jpeg',
      expanded: false,
      showToggle: false,
    },
  ];

  constructor(public i18n: LanguageService) {}
}
