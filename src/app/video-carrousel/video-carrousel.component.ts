import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideosStructuredComponent } from '../dump-components/videos-structured/videos-structured.component';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-video-carrousel',
  standalone: true,
  imports: [NgIf, VideosStructuredComponent, SwiperModule],
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
        'https://player.vimeo.com/video/1028819394?background=1&title=0&byline=0&portrait=0&color=3498db;badge=0&amp;player_id=0&amp;app_id=58479'
      ),
      category: 'Skills Place',
      categoryColor: 'blue',
      ratio: '16-9',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1023687640?background=1&autoplay=1&loop=1&muted=1'
      ),
      category: 'Med News',
      categoryColor: 'orange',
      ratio: '4-3',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1023694926?background=1&autoplay=1&loop=1&muted=1'
      ),
      category: 'Sneakmart ',
      categoryColor: 'blue',
      ratio: '4-3',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1023694912?background=1&autoplay=1&loop=1&muted=1'
      ),
      category: 'Carlsberg',
      categoryColor: 'pink',
      ratio: '16-9',
    },
  ];

  videoList2 = [
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1023686694?background=1&autoplay=1&loop=1&muted=1'
      ),
      category: 'Charles & Melanie',
      categoryColor: 'blue',
      ratio: '16-9',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1023725255?background=1&autoplay=1&loop=1&muted=1'
      ),
      category: 'Docaposte',
      categoryColor: 'pink',
      ratio: '4-3',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1023725597?background=1&autoplay=1&loop=1&muted=1'
      ),
      category: 'Agence P.',
      categoryColor: 'orange',
      ratio: '4-3',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1023694936?background=1&autoplay=1&loop=1&muted=1'
      ),
      category: 'Groupama',
      categoryColor: 'orange',
      ratio: '16-9',
    },
  ];

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: false, // Pour un défilement en boucle

    pagination: { clickable: true },
    navigation: true,
    simulateTouch: true, // Active les gestes tactiles
    allowTouchMove: true,
  };

  constructor(private sanitizer: DomSanitizer) {}
}
