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
      name: 'Nathanaël Chouraki',
      title: 'Founder That’s Y Media',
      feedback:
        '“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants ! En l espace de trois semaines, nous avons collaboré étroitement pour produire près de 40 vidéos qui ont marqué nos partenaires !”',

      photo: '/png/utilisateur-2.png',
      expanded: false,
      showToggle: false,
    },
    {
      name: 'Anthony Debrant',
      title: 'CEO Sneakmart',
      feedback:
        '“Exceptionnelles ces vidéos !! J’avais besoin de vidéos podcast pour alimenter le compte Instagram de Sneakmart... + d’1 million de vues en 6 vidéos !”',

      photo: '/png/policier.png',
      expanded: false,
      showToggle: false,
    },
    {
      name: 'Marine Adatto',
      title: 'CEO Wagmi-Trends',
      feedback:
        '“Je travaille depuis un moment avec Robin, très professionnel, pour les formats podcast, il monte le set, gère absolument tout et m’envoie les vidéos en un temps record.”',

      photo: '/png/profil.png',
      expanded: false,
      showToggle: false,
    },
  ];

  testimonials2: Avis[] = [
    {
      name: 'Benjamin Catellier',
      title: 'CEO Skills Place',
      feedback:
        '“La collaboration a eté plus que parfaite ! il est à l’écoute, patient, comprend parfaitement les attentes et fait preuve d’une créativité exceptionnelle. Vous ne trouverez pas meilleur motion designer. Je recommande vraiment !”',

      photo: '/png/utilisateur.png',
      expanded: false,
      showToggle: false,
    },
    {
      name: 'Adeline Percept',
      title: 'Story W',
      feedback:
        '“Exceptionnel ! Le montage vidéo est au-delà de mes attentes. Le talent et le professionnalisme de l’équipe a donné vie à mon projet de manière spectaculaire”',

      photo: '/png/utilisateur-1.png',
      expanded: false,
      showToggle: false,
    },
    {
      name: 'Marketing et Communication',
      title: 'Powell Software',
      feedback:
        '“Super expérience, c’est du super boulot. Très professionnel, très réactif, je recommande ! Merci”',

      photo: '/png/prisonnier.png',
      expanded: false,
      showToggle: false,
    },
  ];

  testimonials3: Avis[] = [
    {
      name: 'Enzo C.',
      title: 'Sneakers Media',
      feedback:
        '“Cette petite publicité a été remarquable ! Félicitations au monteur pour ses talents exceptionnels ! ”',

      photo: '/png/utilisateur.png',
      expanded: false,
      showToggle: false,
    },
    {
      name: 'Chargé de projet',
      title: 'Carlsberg',
      feedback:
        '“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants ! En l’espace de trois semaines, nous avons collaboré étroitement pour produire près de 40 vidéos qui ont marqué nos partenaires !”',

      photo: '/png/utilisateur.png',
      expanded: false,
      showToggle: false,
    },
    {
      name: 'Service Comm',
      title: 'Mairie d’Arcachon',
      feedback:
        '“À l’écoute, réactif et force de proposition, Robin a réalisé des vidéos très grande qualité. Merci !”',

      photo: '/png/prisonnier.png',
      expanded: false,
      showToggle: false,
    },
  ];

  testimonials4: Avis[] = [
    {
      name: 'Chargé de projet',
      title: 'Carlsberg',
      feedback:
        '“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants ! En l’espace de trois semaines, nous avons collaboré étroitement pour produire près de 40 vidéos qui ont marqué nos partenaires !”',

      photo: '/png/utilisateur.png',
      expanded: false,
      showToggle: false,
    },
    {
      name: 'Anthony Debrant',
      title: 'CEO Sneakmart',
      feedback:
        '“Exceptionnelles ces vidéos !! J’avais besoin de vidéos podcast pour alimenter le compte Instagram de Sneakmart... + d’1 million de vues en 6 vidéos !”',

      photo: '/png/policier.png',
      expanded: false,
      showToggle: false,
    },
    {
      name: 'Marine Adatto',
      title: 'CEO La légende',
      feedback:
        '“Je travaille depuis un moment avec Robin, très professionnel, pour les formats podcast, il monte le set, gère absolument tout et m’envoie les vidéos en un temps record.”',

      photo: '/png/prisonnier.png',
      expanded: false,
      showToggle: false,
    },
  ];
}
