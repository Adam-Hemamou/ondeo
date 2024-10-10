import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideosStructuredComponent } from '../dump-components/videos-structured/videos-structured.component';

@Component({
  selector: 'app-video-carrousel',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, NgStyle, VideosStructuredComponent],
  templateUrl: './video-carrousel.component.html',
  styleUrls: ['./video-carrousel.component.scss'],
})
export class VideoCarrouselComponent {
  @Input() isMobile!: boolean;

  currentPage = 0;

  videoList1 = [
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1006127429'
      ),
      category: 'Société',
      categoryColor: 'blue',
      ratio: '16-9',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/187415697'
      ),
      category: 'Réalisations',
      categoryColor: 'orange',
      ratio: '4-3',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/187415697'
      ),
      category: '3.2M vues IG',
      categoryColor: 'blue',
      ratio: '4-3',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1006127429'
      ),
      category: '70k vues YT',
      categoryColor: 'pink',
      ratio: '16-9',
    },
  ];
  videoList2 = [
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1006127429'
      ),
      category: 'Société',
      categoryColor: 'blue',
      ratio: '16-9',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/187415697'
      ),
      category: 'Collaboration',
      categoryColor: 'pink',
      ratio: '4-3',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/187415697'
      ),
      category: 'Expérience',
      categoryColor: 'orange',
      ratio: '4-3',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1006127429'
      ),
      category: 'Expérience',
      categoryColor: 'orange',
      ratio: '16-9',
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  goToPage(pageIndex: number) {
    this.currentPage = pageIndex;
  }
}
