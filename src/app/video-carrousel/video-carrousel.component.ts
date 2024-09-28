import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-carrousel',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './video-carrousel.component.html',
  styleUrls: ['./video-carrousel.component.scss'],
})
export class VideoCarrouselComponent {
  @Input() isMobile!: boolean;

  videos = [
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1006127429'
      ),
      category: 'Société',
      categoryColor: 'blue',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1006127429'
      ),
      category: 'Réalisations',
      categoryColor: 'orange',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1006127429'
      ),
      category: '3.2M vues IG',
      categoryColor: 'blue',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1006127429'
      ),
      category: '70k vues YT',
      categoryColor: 'pink',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1006127429'
      ),
      category: 'Société',
      categoryColor: 'blue',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1006127429'
      ),
      category: 'Collaboration',
      categoryColor: 'pink',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1006127429'
      ),
      category: 'Expérience',
      categoryColor: 'orange',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1006127429'
      ),
      category: 'Expérience',
      categoryColor: 'orange',
    },
  ];

  currentPage = 0;

  constructor(private sanitizer: DomSanitizer) {}

  get paginatedVideos() {
    const start = this.currentPage * 4;
    const videosToShow = this.videos.slice(start, start + 4);
    console.log('Videos à afficher:', videosToShow); // Debug
    return videosToShow;
  }

  goToPage(page: number) {
    if (page >= 0 && page < Math.ceil(this.videos.length / 4)) {
      this.currentPage = page;
    }
  }

  openVideo(src: string) {
    console.log('Ouverture de la vidéo :', src);
  }
}
