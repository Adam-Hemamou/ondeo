import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { scrollToSectionCal } from '../../utils/scrolls';

@Component({
  selector: 'app-promise',
  standalone: true,
  imports: [NgIf],
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent {
  @Input() isMobile!: boolean;

  scrollToCalendly() {
    scrollToSectionCal();
  }
}
