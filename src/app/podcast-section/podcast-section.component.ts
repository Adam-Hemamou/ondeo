import { Component, Input } from '@angular/core';
import { OfferCardComponent } from '../dump-components/offer-card/offer-card.component';
import { Offer } from '../core/types/offer';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';
import { NgIf } from '@angular/common';
import { BlackOfferCardComponent } from '../dump-components/black-offer-card/black-offer-card.component';
import { WhiteOfferCardComponent } from '../dump-components/white-offer-card/white-offer-card.component';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-podcast-section',
  standalone: true,
  imports: [
    OfferCardComponent,
    BlackOfferCardComponent,
    WhiteOfferCardComponent,
    SwiperModule,
    NgIf,
  ],
  templateUrl: './podcast-section.component.html',
  styleUrls: ['./podcast-section.component.scss'],
})
export class PodcastSectionComponent {
  @Input() isMobile!: boolean;

  videoUrl: string =
    'https://player.vimeo.com/video/68414507?title=0&byline=0&portrait=0&dnt=1';

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: { clickable: true },
    speed: 800,
  };

  whiteOfferCards: Offer = {
    title: 'Starter',
    price: '1100 €',
    oldPrice: null,
    videos: '10 vidéos',
    description: 'Analyse des thématiques virales pour votre secteur...',
    features: [
      'Analyse des thématiques virales pour votre secteur',
      'Rédaction en collaboration des sujets abordés',
      'Aménagement du studio selon vos goûts',
      'Production intégrale des 10 vidéos',
      'Modifications illimitées',
      'Optimisation à 100% pour performer',
      'Analyse des résultats',
      '5 vidéos motion design',
    ],
    background: 'white',
    popular: false,
    icon: '/png/discount.png',
  };

  blackOffercard: Offer = {
    title: 'Pro',
    price: '1900 €',
    oldPrice: '2200 €',
    videos: '20 vidéos',
    description: 'Production complète de 20 vidéos...',
    features: [
      'Analyse des thématiques virales pour votre secteur',
      'Rédaction en collaboration des sujets abordés',
      'Aménagement du studio selon vos goûts',
      'Production complète de 20 vidéos',
      'Modifications illimitées',
      'Optimisation à 100% pour performer',
      'Analyse des résultats',
      '5 vidéos motion design',
    ],
    background: 'black',
    popular: true,
    icon: '/png/space-ship.png',
  };
}
