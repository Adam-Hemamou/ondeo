import { Component, Input } from '@angular/core';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-video-pres',
  standalone: true,
  imports: [],
  templateUrl: './video-pres.component.html',
  styleUrls: ['./video-pres.component.scss'],
})
export class VideoPresComponent {
  @Input() isMobile!: boolean;

  constructor(public i18n: LanguageService) {}
}
