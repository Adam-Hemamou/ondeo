import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Offer } from 'src/app/core/types/offer';
import { scrollToSectionCal } from '../../../utils/scrolls';

@Component({
  selector: 'app-white-offer-card',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './white-offer-card.component.html',
  styleUrls: ['./white-offer-card.component.scss'],
})
export class WhiteOfferCardComponent {
  @Input() isMobile!: boolean;

  @Input() whiteOffer!: Offer;

  scrollToCalendly() {
    scrollToSectionCal();
  }
}
