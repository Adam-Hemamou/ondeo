import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Offer } from 'src/app/core/types/offer';

@Component({
  selector: 'app-offer-card',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss'],
})
export class OfferCardComponent {
  @Input() isMobile!: boolean;

  @Input() offers!: Offer[];

  currentPage = 0;

  get paginatedOffers() {
    return [this.offers[this.currentPage]]; // Une seule offre par page
  }

  goToPage(page: number) {
    if (page >= 0 && page < this.offers.length) {
      this.currentPage = page;
    }
  }
}
