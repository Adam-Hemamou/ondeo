import { Component } from '@angular/core';
import { sharedAnimation } from '../core/animations/animation';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [sharedAnimation],
})
export class NavComponent {
  isMenuOpen: boolean = false; // État du menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Inverser l'état du menu
  }
}
