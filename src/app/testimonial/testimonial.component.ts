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
        '“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants !”',

      photo: '/png/profil.png',
      expanded: false,
      showToggle: false,
    },
    {
      name: 'Yannick Nambo',
      title: 'The Bridge Media',
      feedback:
        '“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants ! En l espace de trois semaines, nous avons collaboré étroitement pour produire près de 40 vidéos qui ont marqué nos partenaires !”',

      photo: '/png/utilisateur-1.png',
      expanded: false,
      showToggle: false,
    },
    {
      name: 'Nathanaël Chourak',
      title: 'Founder That’s Y Media',
      feedback:
        '“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants ! En l espace de trois semaines, nous avons collaboré étroitement pour produire près de 40 vidéos qui ont marqué nos partenaires !”',

      photo: '/png/utilisateur-2.png',
      expanded: false,
      showToggle: false,
    },
  ];
  testimonials2: Avis[] = [
    {
      name: 'Marielle Trinquet',
      title: 'Avocate / Paris',
      feedback:
        '“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants ! En l’espace de trois semaines, nous avons collaboré étroitement pour produire près de 40 vidéos qui ont marqué nos partenaires !”',

      photo: '/png/utilisateur.png',
      expanded: false,
    },
    {
      name: 'Anthony Debrant',
      title: 'CEO Sneakmart',
      feedback:
        '“Exceptionnelles ces vidéos !! J’avais besoin de vidéos podcast pour alimenter le compte Instagram de Sneakmart... + d’1 million de vues en 6 vidéos !”',

      photo: '/png/policier.png',
      expanded: false,
    },
    {
      name: 'Marine Adatto',
      title: 'CEO La légende',
      feedback:
        '“Je travaille depuis un moment avec Robin, très professionnel, pour les formats podcast, il monte le set, gère absolument tout et m’envoie les vidéos en un temps record.”',

      photo: '/png/prisonnier.png',
      expanded: false,
    },
  ];
}
