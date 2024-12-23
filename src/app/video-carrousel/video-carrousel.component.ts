import { NgIf } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideosStructuredComponent } from '../dump-components/videos-structured/videos-structured.component';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';
import { Videos } from '../core/types/videos';

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
  @ViewChild('swiper') swiper?: SwiperComponent;

  direction: boolean = true;

  videoList1: Videos[] = [
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1028819394?background=1&title=0&byline=0&portrait=0&color=3498db;badge=0&amp;player_id=0&amp;app_id=58479'
      ),
      category: 'Skills Place',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1023687640?background=1&autoplay=1&loop=1&muted=1'
      ),
      category: 'Med News',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1023694926?background=1&autoplay=1&loop=1&muted=1'
      ),
      category: 'Sneakmart ',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1023694912?background=1&autoplay=1&loop=1&muted=1'
      ),
      category: 'Carlsberg',
    },
  ];

  videoList2: Videos[] = [
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1039976337?background=1&autoplay=1&loop=1&muted=1'
      ),
      category: 'Gasparg G',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1023725255?background=1&autoplay=1&loop=1&muted=1'
      ),
      category: 'Docaposte',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1023725597?background=1&autoplay=1&loop=1&muted=1'
      ),
      category: 'Agence P.',
    },
    {
      src: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://player.vimeo.com/video/1023694936?background=1&autoplay=1&loop=1&muted=1'
      ),
      category: 'Groupama',
    },
  ];

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: false,
    pagination: { clickable: true },
    navigation: true,
    simulateTouch: true,
    allowTouchMove: true,
  };

  constructor(private sanitizer: DomSanitizer) {}
}
