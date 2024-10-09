import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-step-cards',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './step-cards.component.html',
  styleUrls: ['./step-cards.component.scss'],
})
export class StepCardsComponent {
  cards = [
    {
      title: 'Stratégie',
      description:
        'Nous élaborons ensemble le script de votre vidéo via un document partagé.',
      number: '01',
      svg: '/png/idee.png', // Remplace par le chemin de ton fichier SVG
    },
    {
      title: 'Storyboard',
      description:
        'Nous vous proposons un storyboard avant de lancer la production.',
      number: '02',
      svg: '/png/story-book.png',
    },
    {
      title: 'Production',
      description:
        'Nous réalisons la vidéo et vous proposons une première version.',
      number: '03',
      svg: '/png/clap.png',
    },
    {
      title: 'Feedback',
      description: "Retours illimités jusqu'à satisfaction.",
      number: '04',
      svg: '/png/loupe.png',
    },
  ];
}
