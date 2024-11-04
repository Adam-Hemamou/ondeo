import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Offer } from 'src/app/core/types/offer';
import { scrollToSectionCal } from '../../../utils/scrolls';

@Component({
  selector: 'app-offer-card',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss'],
})
export class OfferCardComponent {
  @Input() isMobile!: boolean;

  @Input() offer!: Offer;

  scrollToCalendly() {
    scrollToSectionCal();
  }
}
