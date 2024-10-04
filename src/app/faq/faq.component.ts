import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgFor],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  FAQList = [
    {
      question: 'Pourquoi nous et pas une autre agence ?',
      answer:
        'Plus de 20 millions de vues. Systématiquement à la recherche de nouveauté, on vous prépare déjà ce qu’il se fait de mieux.',
    },
    {
      question: 'Ça va vraiment m’être utile ?',
      answer: '',
    },
    {
      question: 'Faut-il s’engager sur plusieurs mois ?',
      answer: '',
    },
    {
      question: 'Quelles sont vos conditionsde paiement ?',
      answer: '',
    },
    {
      question: 'Quels sont vos délaisde livraison  ?',
      answer: '',
    },
  ];
}
