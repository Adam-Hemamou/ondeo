import { Component, Input } from '@angular/core';
import { OfferCardComponent } from '../dump-components/offer-card/offer-card.component';
import { Offer } from '../core/types/offer';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';
import { NgIf } from '@angular/common';
import { LanguageService } from '../i18n/language.service';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-podcast-section',
  standalone: true,
  imports: [OfferCardComponent, SwiperModule, NgIf],
  templateUrl: './podcast-section.component.html',
  styleUrls: ['./podcast-section.component.scss'],
})
export class PodcastSectionComponent {
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
    speed: 600,
  };

  whiteOfferCards: Offer = {
    title: 'Starter',
    price: '1590 €',
    oldPrice: null,
    videos: this.i18n.t.offers.podcast.videos(10),
    description: 'Analyse des thématiques virales pour votre secteur...',
    features: this.i18n.t.offers.podcast.features(10),
    background: 'white',
    popular: false,
    icon: '/png/discount.png',
  };

  blackOffercard: Offer = {
    title: 'Premium',
    price: '2390 €',
    oldPrice: '2700 €',
    videos: this.i18n.t.offers.podcast.videos(20),
    description: 'Production complète de 20 vidéos...',
    features: this.i18n.t.offers.podcast.features(20),
    background: 'black',
    popular: true,
    icon: '/png/space-ship.png',
  };

  constructor(public i18n: LanguageService) {}
}
