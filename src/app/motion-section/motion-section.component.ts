import { Component } from '@angular/core';
import { OfferCardComponent } from '../dump-components/offer-card/offer-card.component';
import { Offer } from '../core/types/offer';
import { SimpleVideoComponent } from '../dump-components/simple-video/simple-video.component';

@Component({
  selector: 'app-motion-section',
  standalone: true,
  imports: [OfferCardComponent, SimpleVideoComponent],
  templateUrl: './motion-section.component.html',
  styleUrls: ['./motion-section.component.scss'],
})
export class MotionSectionComponent {
  videoUrl: string =
    'https://player.vimeo.com/video/246185769?title=0&byline=0&portrait=0&dnt=1';
  offerList: Offer[] = [
    {
      title: 'Starter',
      price: '850 €',
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
        'Vidéo français et anglais',
      ],
      background: 'white',
      popular: false,
      icon: '/png/discount.png',
    },
    {
      title: 'Professionnel',
      price: '1250 €',
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
        'Vidéo français et anglais',
      ],
      background: 'black',
      popular: true,
      icon: '/png/space-ship.png',
    },
  ];
}
