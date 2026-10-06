import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-calandly',
  standalone: true,
  imports: [],
  templateUrl: './calandly.component.html',
  styleUrls: ['./calandly.component.scss'],
})
export class CalandlyComponent implements AfterViewInit, OnDestroy {
  @ViewChild('widget') widget!: ElementRef<HTMLElement>;
  private observer?: IntersectionObserver;

  // Le widget Calendly est chargé seulement à l'approche de la section
  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          this.observer?.disconnect();
          this.loadWidget();
        }
      },
      { rootMargin: '1500px 0px' }
    );
    this.observer.observe(this.widget.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private loadWidget() {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }
}
