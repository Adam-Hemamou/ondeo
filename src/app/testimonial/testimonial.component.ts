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
      name: 'Chargé de projet',
      title: 'Caisse d’Épargne',
      feedback:
        '“Merci pour cette prestation. Le contact a été très fluide, l’équipe autonome et le résultat est très satisfaisant !”',

      photo: '/photo-avis/caisse-epargne.jpg',
      expanded: false,
      showToggle: false,
    },
    {
      name: 'Anthony Debrant',
      title: 'CEO Sneakmart',
      feedback:
        '“Exceptionnelles ces vidéos !! J’avais besoin de vidéos podcast pour alimenter le compte Instagram de Sneakmart... + d’1 million de vues en 6 vidéos !”',

      photo: '/photo-avis/capture.png',
      expanded: false,
      showToggle: false,
    },
    {
      name: 'Service Communication',
      title: 'Mairie d’Arcachon',
      feedback:
        '“À l’écoute, réactif et force de proposition, Robin a réalisé des vidéos très grande qualité. Merci !”',

      photo: '/photo-avis/arca.jpg',
      expanded: false,
      showToggle: false,
    },
  ];

  testimonials2: Avis[] = [
    {
      name: 'Chargée de production',
      title: 'Danone',
      feedback:
        '“Cette petite publicité a été remarquable ! Félicitations pour cette éfficacité ! Au plaisir de travailler ensemble sur un prochain projet. ”',

      photo: '/photo-avis/capture-danone.png',
      expanded: false,
      showToggle: false,
    },
    {
      name: 'Philippe D.',
      title: 'Docaposte',
      feedback:
        '“Le service de Podcast a porté ses fruits ! Merci à toute l’équipe Ondeo pour votre efficacité et pour votre professionnalisme”',

      photo: '/photo-avis/philippe-docaposte.jpeg',
      expanded: false,
      showToggle: false,
    },
    {
      name: 'Community Manager',
      title: 'French-Med',
      feedback:
        '“Nous avons adoré travailler avec Ondeo et nous avons actuellement économisé en passant avec eux.”',

      photo: '/photo-avis/french-med.jpeg',
      expanded: false,
      showToggle: false,
    },
  ];

  testimonials3: Avis[] = [
    {
      name: 'Nathanaël Chouraki',
      title: 'Founder That’s Y Media',
      feedback:
        "“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants ! En l'espace de trois semaines, nous avons collaboré étroitement pour produire près de 40 vidéos qui ont marqué nos partenaires !”",

      photo: '/photo-avis/nathanael-chouraqui.jpg',
      expanded: false,
      showToggle: false,
    },
    {
      name: 'Chargé de projet',
      title: 'Carlsberg',
      feedback: '“Félicitations au monteur pour ses talents exceptionnels ! ”',

      photo: '/photo-avis/carlsberg.jpg',
      expanded: false,
      showToggle: false,
    },
    {
      name: 'Marine Adatto',
      title: 'CEO Wagmi-Trends',
      feedback:
        '“Je travaille depuis un moment avec Robin, très professionnel, pour les formats podcast, il monte le set, gère absolument tout et m’envoie les vidéos en un temps record.”',

      photo: '/photo-avis/marine-adatto.jpeg',
      expanded: false,
      showToggle: false,
    },
  ];

  testimonials4: Avis[] = [
    {
      name: 'Benjamin Catellier',
      title: 'CEO Skills Place',
      feedback:
        '“La collaboration a eté plus que parfaite ! Il est à l’écoute, patient, comprend parfaitement les attentes et fait preuve d’une créativité exceptionnelle. Vous ne trouverez pas meilleur motion designer. Je recommande vraiment !”',

      photo: '/photo-avis/skills_p.jpeg',
      expanded: false,
      showToggle: false,
    },
    {
      name: 'Adeline Percept',
      title: 'Story W',
      feedback:
        '“Exceptionnel ! Le montage vidéo est au-delà de mes attentes. Le talent et le professionnalisme de l’équipe a donné vie à mon projet de manière spectaculaire”',

      photo: '/photo-avis/adeline-percept.jpeg',
      expanded: false,
      showToggle: false,
    },
    {
      name: 'Marketing et Communication',
      title: 'Powell Software',
      feedback:
        '“Super expérience, c’est du super boulot. Très professionnel, très réactif, je recommande ! Merci”',

      photo: '/photo-avis/powell-software.jpeg',
      expanded: false,
      showToggle: false,
    },
  ];
}
