import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Autoplay, Pagination, SwiperOptions } from 'swiper';
import { Avis } from '../core/types/avis';
import { AvisCardComponent } from '../dump-components/avis-card/avis-card.component';

SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [NgFor, SwiperModule, AvisCardComponent],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: { clickable: true },
  };

  testimonials1: Avis[] = [
    {
      name: 'Nathanaël Chouraki',
      title: "Founder That's Y Media",
      feedback:
        '“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants! ...”',
      photo: '/png/profil.png',
    },
    {
      name: "Qui d'autres",
      title: 'CEO/CMO',
      feedback:
        '“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants! ...”',
      photo: '/png/utilisateur-1.png',
    },
    {
      name: "Encore quelqu'un",
      title: 'CEO/CMO',
      feedback:
        '“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants! ...”',
      photo: '/png/utilisateur-2.png',
    },
  ];
  testimonials2: Avis[] = [
    {
      name: 'Nathanaël Chouraki',
      title: "Founder That's Y Media",
      feedback:
        '“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants! ...”',
      photo: '/png/utilisateur.png',
    },
    {
      name: 'YEEEEEs',
      title: 'CEO/CMO',
      feedback:
        '“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants! ...”',
      photo: '/png/policier.png',
    },
    {
      name: 'YOOOO',
      title: 'CEO/CMO',
      feedback:
        '“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants! ...”',
      photo: '/png/prisonnier.png',
    },
  ];
}
