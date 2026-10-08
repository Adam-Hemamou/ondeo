import { Component, Input } from '@angular/core';
import { Videos } from 'src/app/core/types/videos';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-videos-structured',
  standalone: true,
  imports: [],
  templateUrl: './videos-structured.component.html',
  styleUrls: ['./videos-structured.component.scss'],
})
export class VideosStructuredComponent {
  @Input() videoList: Videos[] = [];

  constructor(public i18n: LanguageService) {}
}
