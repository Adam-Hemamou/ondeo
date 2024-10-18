import { Component, Input } from '@angular/core';
import { sharedAnimation } from '../core/animations/animation';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgIf],
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
