import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { sharedAnimation } from '../core/animations/animation';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  animations: [sharedAnimation],
})
export class FaqComponent {
  isOpen: boolean[] = [];

  FAQList = [
    {
      question: 'Pourquoi nous et pas une autre agence ?',
      answer:
        "Plus de 20 millions de vues. Plus de 20 vidéos produites par semaine. Systématiquement à la recherche de nouveauté, on vous prépare déjà ce qu'il se fait de mieux. ",
    },
    {
      question: 'Ça va vraiment m’être utile ?',
      answer:
        'Aujourd’hui, impossible de vouloir se développer sans vidéo. C’est le levier n°1 en 2024 pour gagner en visibilité et ainsi en CA. ',
    },
    {
      question: 'Faut-il s’engager sur plusieurs mois ?',
      answer:
        'Aucune obligation d’engagement. En revanche pour une stratégie sur les réseaux sociaux, nous recommandons d’avoir une présence quotidienne pendant plusieurs mois.',
    },
    {
      question: 'Quelles sont vos conditionsde paiement ?',
      answer:
        'Lien Stripe pour un paiement sécurisé. Nous offrons des réductions en cas de commandes répétées.',
    },
    {
      question: 'Quels sont vos délaisde livraison  ?',
      answer:
        'Ça dépend de la durée et de la complexité du projet. Nous sommes en moyenne sur un délai de 30 jours. Dans certaines conditions, nous proposons aussi des livraisons express. ',
    },
  ];

  toggleAnswer(index: number) {
    // Fermer l'élément s'il est déjà ouvert, sinon ouvrir
    this.isOpen[index] = !this.isOpen[index];
  }
}
