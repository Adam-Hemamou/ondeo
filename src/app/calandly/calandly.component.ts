import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-calandly',
  standalone: true,
  imports: [],
  templateUrl: './calandly.component.html',
  styleUrls: ['./calandly.component.scss'],
})
export class CalandlyComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Charger le script Calendly après que le composant soit rendu
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }
}
