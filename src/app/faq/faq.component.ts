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
        'Plus de 20 millions de vues. Systématiquement à la recherche de nouveauté, on vous prépare déjà ce qu’il se fait de mieux.',
    },
    {
      question: 'Ça va vraiment m’être utile ?',
      answer:
        'Plus de 20 millions de vues. Systématiquement à la recherche de nouveauté, on vous prépare déjà ce qu’il se fait de mieux.',
    },
    {
      question: 'Faut-il s’engager sur plusieurs mois ?',
      answer:
        'Plus de 20 millions de vues. Systématiquement à la recherche de nouveauté, on vous prépare déjà ce qu’il se fait de mieux.',
    },
    {
      question: 'Quelles sont vos conditionsde paiement ?',
      answer:
        'Plus de 20 millions de vues. Systématiquement à la recherche de nouveauté, on vous prépare déjà ce qu’il se fait de mieux.',
    },
    {
      question: 'Quels sont vos délaisde livraison  ?',
      answer:
        'Plus de 20 millions de vues. Systématiquement à la recherche de nouveauté, on vous prépare déjà ce qu’il se fait de mieux.',
    },
  ];

  toggleAnswer(index: number) {
    // Fermer l'élément s'il est déjà ouvert, sinon ouvrir
    this.isOpen[index] = !this.isOpen[index];
  }
}
