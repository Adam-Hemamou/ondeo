import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { StepCard } from '../core/types/stepcard';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-step-cards',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './step-cards.component.html',
  styleUrls: ['./step-cards.component.scss'],
})
export class StepCardsComponent {
  cards: StepCard[] = [
    {
      ...this.i18n.t.steps.strategy,
      number: '01',
      svg: '/png/idee.png',
    },
    {
      ...this.i18n.t.steps.storyboard,
      number: '02',
      svg: '/png/story-book.png',
    },
    {
      ...this.i18n.t.steps.production,
      number: '03',
      svg: '/png/clap.png',
    },
    {
      ...this.i18n.t.steps.feedback,
      number: '04',
      svg: '/png/loupe.png',
    },
  ];

  constructor(public i18n: LanguageService) {}
}
