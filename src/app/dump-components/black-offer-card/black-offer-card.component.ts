import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Offer } from 'src/app/core/types/offer';
import { scrollToSectionCal } from '../../../utils/scrolls';

@Component({
  selector: 'app-black-offer-card',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './black-offer-card.component.html',
  styleUrls: ['./black-offer-card.component.scss'],
})
export class BlackOfferCardComponent {
  @Input() isMobile!: boolean;

  @Input() blackOffer!: Offer;

  scrollToCalendly() {
    scrollToSectionCal();
  }
}
