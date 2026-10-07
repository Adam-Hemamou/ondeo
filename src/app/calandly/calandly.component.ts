import { NgIf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsentService } from '../consent/consent.service';

@Component({
  selector: 'app-calandly',
  standalone: true,
  imports: [NgIf],
  templateUrl: './calandly.component.html',
  styleUrls: ['./calandly.component.scss'],
})
export class CalandlyComponent implements AfterViewInit, OnDestroy {
  @ViewChild('widget') widget!: ElementRef<HTMLElement>;

  widgetLoaded = false;

  private nearViewport = false;
  private observer?: IntersectionObserver;
  private subscription?: Subscription;

  constructor(private consent: ConsentService) {}

  // Calendly dépose ses propres cookies : sans consentement, il n'est chargé
  // que si le visiteur demande à afficher le calendrier.
  get consentGiven(): boolean {
    return !!this.consent.choice?.statistics;
  }

  // Le widget Calendly est chargé seulement à l'approche de la section
  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          this.observer?.disconnect();
          this.nearViewport = true;
          this.loadIfAllowed();
        }
      },
      { rootMargin: '1500px 0px' }
    );
    this.observer.observe(this.widget.nativeElement);
    this.subscription = this.consent.choice$.subscribe(() =>
      this.loadIfAllowed()
    );
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    this.subscription?.unsubscribe();
  }

  loadWidget() {
    if (this.widgetLoaded) {
      return;
    }
    this.widgetLoaded = true;
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }

  private loadIfAllowed() {
    if (this.nearViewport && this.consentGiven) {
      this.loadWidget();
    }
  }
}
