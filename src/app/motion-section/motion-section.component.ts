import { Component, Input } from '@angular/core';
import { OfferCardComponent } from '../dump-components/offer-card/offer-card.component';
import { Offer } from '../core/types/offer';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';

import { NgFor, NgIf } from '@angular/common';
import { LanguageService } from '../i18n/language.service';

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
      price: '1790 €',
      oldPrice: null,
      videos: this.i18n.t.offers.motion.videos(45),
      description: 'carte de nos offres',
      features: this.i18n.t.offers.motion.features(45),
      background: 'white',
      popular: false,
      icon: '/png/discount.png',
    },
    {
      title: 'Premium',
      price: '2190 €',
      oldPrice: null,
      videos: this.i18n.t.offers.motion.videos(60),
      description: 'carte populaire de nos offres',
      features: this.i18n.t.offers.motion.features(60),
      background: 'black',
      popular: true,
      icon: '/png/space-ship.png',
    },
  ];

  constructor(public i18n: LanguageService) {}
}
