import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { sharedAnimation } from '../core/animations/animation';
import { Faq } from '../core/types/faq';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  animations: [sharedAnimation],
})
export class FaqComponent {
  @Input() isMobile!: boolean;
  isOpen: boolean[] = [];

  FAQList: Faq[] = this.i18n.t.faq.items;

  constructor(public i18n: LanguageService) {}

  toggleAnswer(index: number) {
    this.isOpen[index] = !this.isOpen[index];
  }
}
