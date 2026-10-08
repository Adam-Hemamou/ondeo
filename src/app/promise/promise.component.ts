import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { scrollToSectionCal } from '../../utils/scrolls';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-promise',
  standalone: true,
  imports: [NgIf],
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent {
  @Input() isMobile!: boolean;

  constructor(public i18n: LanguageService) {}

  scrollToCalendly() {
    scrollToSectionCal();
  }
}
