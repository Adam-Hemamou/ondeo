import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Autoplay, Pagination, SwiperOptions } from 'swiper';
import { Avis } from '../core/types/avis';
import { AvisCardComponent } from '../dump-components/avis-card/avis-card.component';

SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [NgFor, NgIf, SwiperModule, AvisCardComponent],
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
      name: 'Marine Adatto',
      title: 'CEO Wagmi-Trends',
      feedback:
        '"Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants ! En l espace de trois semaines, nous avons collaboré étroitement pour produire près de 40 vidéos qui ont marqué nos partenaires !"',

      photo: '/png/profil.png',
      expanded: false,
    },
    {
      name: 'Yannick Nambo',
      title: 'The Bridge Media',
      feedback:
        '"Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants ! En l espace de trois semaines, nous avons collaboré étroitement pour produire près de 40 vidéos qui ont marqué nos partenaires !"',

      photo: '/png/utilisateur-1.png',
      expanded: false,
    },
    {
      name: 'Nathanaël Chourak',
      title: 'Founder That’s Y Media',
      feedback:
        '"Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants ! En l espace de trois semaines, nous avons collaboré étroitement pour produire près de 40 vidéos qui ont marqué nos partenaires !"',

      photo: '/png/utilisateur-2.png',
      expanded: false,
    },
  ];
  testimonials2: Avis[] = [
    {
      name: 'Nathanaël Chouraki',
      title: "Founder That's Y Media",
      feedback:
        '"Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants ! En l espace de trois semaines, nous avons collaboré étroitement pour produire près de 40 vidéos qui ont marqué nos partenaires !"',

      photo: '/png/utilisateur.png',
      expanded: false,
    },
    {
      name: 'YEEEEEs',
      title: 'CEO/CMO',
      feedback:
        '"Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants ! En l espace de trois semaines, nous avons collaboré étroitement pour produire près de 40 vidéos qui ont marqué nos partenaires !"',

      photo: '/png/policier.png',
      expanded: false,
    },
    {
      name: 'YOOOO',
      title: 'CEO/CMO',
      feedback:
        '"Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants ! En l espace de trois semaines, nous avons collaboré étroitement pour produire près de 40 vidéos qui ont marqué nos partenaires !"',

      photo: '/png/prisonnier.png',
      expanded: false,
    },
  ];
}
