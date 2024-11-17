import { Component, Input } from '@angular/core';
import { OfferCardComponent } from '../dump-components/offer-card/offer-card.component';
import { Offer } from '../core/types/offer';
import { SimpleVideoComponent } from '../dump-components/simple-video/simple-video.component';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';

import { NgFor, NgIf } from '@angular/common';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-motion-section',
  standalone: true,
  imports: [OfferCardComponent, SwiperModule, NgFor, NgIf],
  templateUrl: './motion-section.component.html',
  styleUrls: ['./motion-section.component.scss'],
})
export class MotionSectionComponent {
  @Input() isMobile!: boolean;

  videoUrl: string =
    'https://player.vimeo.com/video/246185769?title=0&byline=0&portrait=0&dnt=1';

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

  offerCards: Offer[] = [
    {
      title: 'Starter',
      price: '1290 €',
      oldPrice: null,
      videos: 'video 45 secondes',
      description: 'carte de nos offres',
      features: [
        '45 secondes de vidéo motion design',
        'Écriture du script',
        'Storyboard / Illustrations',
        'Voix off / Sound Design',
        'Modifications illimitées',
        '3 formats déclinés',
        'Sous-titres',
        'Plusieurs langues',
      ],
      background: 'white',
      popular: false,
      icon: '/png/discount.png',
    },
    {
      title: 'Premium',
      price: '1690 €',
      oldPrice: null,
      videos: 'video 60 secondes',
      description: 'carte populaire de nos offres',
      features: [
        '45 secondes de vidéo motion design',
        'Écriture du script',
        'Storyboard / Illustrations',
        'Voix off / Sound Design',
        'Modifications illimitées',
        '3 formats déclinés',
        'Sous-titres',
        'Plusieurs langues',
      ],
      background: 'black',
      popular: true,
      icon: '/png/space-ship.png',
    },
  ];
}
