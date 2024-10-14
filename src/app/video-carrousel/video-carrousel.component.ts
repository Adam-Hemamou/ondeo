import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideosStructuredComponent } from '../dump-components/videos-structured/videos-structured.component';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-video-carrousel',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    NgIf,
    NgStyle,
    VideosStructuredComponent,
    SwiperModule,
  ],
  templateUrl: './video-carrousel.component.html',
  styleUrls: ['./video-carrousel.component.scss'],
})
export class VideoCarrouselComponent {
  @Input() isMobile!: boolean;
  // @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  @ViewChild('swiper') swiper?: SwiperComponent;

  direction: boolean = true;

  videoList1 = [
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1006127429?title=0&byline=0&portrait=0&dnt=1'
      ),
      category: 'Société',
      categoryColor: 'blue',
      ratio: '16-9',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/187415697?title=0&byline=0&portrait=0&dnt=1'
      ),
      category: 'Réalisations',
      categoryColor: 'orange',
      ratio: '4-3',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/187415697?title=0&byline=0&portrait=0&dnt=1'
      ),
      category: '3.2M vues IG',
      categoryColor: 'blue',
      ratio: '4-3',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1006127429?title=0&byline=0&portrait=0&dnt=1'
      ),
      category: '70k vues YT',
      categoryColor: 'pink',
      ratio: '16-9',
    },
  ];

  videoList2 = [
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1006127429?title=0&byline=0&portrait=0&dnt=1'
      ),
      category: 'Société',
      categoryColor: 'blue',
      ratio: '16-9',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/187415697?title=0&byline=0&portrait=0&dnt=1'
      ),
      category: 'Collaboration',
      categoryColor: 'pink',
      ratio: '4-3',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/187415697?title=0&byline=0&portrait=0&dnt=1'
      ),
      category: 'Expérience',
      categoryColor: 'orange',
      ratio: '4-3',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1006127429?title=0&byline=0&portrait=0&dnt=1'
      ),
      category: 'Expérience',
      categoryColor: 'orange',
      ratio: '16-9',
    },
  ];

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true, // Pour un défilement en boucle
    autoplay: {
      delay: 5000, // Délai de 5 secondes entre chaque slide
      disableOnInteraction: true,
    },
    pagination: { clickable: true },
  };

  constructor(private sanitizer: DomSanitizer) {}
}
