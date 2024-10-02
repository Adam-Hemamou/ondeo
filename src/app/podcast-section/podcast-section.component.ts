import { Component } from '@angular/core';
import { OfferCardComponent } from '../dump-components/offer-card/offer-card.component';
import { Offer } from '../core/types/offer';

@Component({
  selector: 'app-podcast-section',
  standalone: true,
  imports: [OfferCardComponent],
  templateUrl: './podcast-section.component.html',
  styleUrls: ['./podcast-section.component.scss'],
})
export class PodcastSectionComponent {
  offerList: Offer[] = [
    {
      title: 'Starter',
      price: '980 €',
      oldPrice: '1200 €',
      videos: '10 vidéos / mois',
      description: 'Analyse des thématiques virales pour votre secteur...',
      features: [
        'Analyse des thématiques virales pour votre secteur',
        'Rédaction en collaboration des sujets abordés',
        'Aménagement du studio selon vos goûts',
        'Production intégrale des 10 vidéos',
        'Création des miniatures',
        'Modifications illimitées',
        'Partage d’un planning de publications',
        'Analyse des résultats',
      ],
      background: 'white',
      popular: false,
      icon: '/png/discount.png',
    },
    {
      title: 'Professionnel',
      price: '2000 €',
      oldPrice: null,
      videos: '20 vidéos / mois',
      description: 'Production complète de 20 vidéos...',
      features: [
        'Analyse des thématiques virales pour votre secteur',
        'Rédaction en collaboration des sujets abordés',
        'Aménagement du studio selon vos goûts',
        'Production complète de 20 vidéos',
        'Montage complet',
        'Modifications illimitées',
        'Optimisation à 100% pour performer',
        'Analyse des résultats',
      ],
      background: 'black',
      popular: true,
      icon: '/png/space-ship.png',
    },
  ];
}
