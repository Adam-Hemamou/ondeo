import { Component, HostListener, Input } from '@angular/core';
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

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.isMenuOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  closeMenuOnClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // Vérifie si le clic est en dehors de la nav-bar et du burger-menu
    const navBar = document.querySelector('.nav-bar');
    const burgerMenu = document.querySelector('.burger-menu');

    if (
      this.isMenuOpen &&
      !navBar?.contains(target) &&
      !burgerMenu?.contains(target)
    ) {
      this.isMenuOpen = false; // Fermer le menu
    }
  }
}
