import { Component, HostListener } from '@angular/core';
import { sharedAnimation } from '../core/animations/animation';
import { scrollToSectionCal } from '../../utils/scrolls';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [sharedAnimation],
})
export class NavComponent {
  isMenuOpen: boolean = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToCalendly() {
    scrollToSectionCal();
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

    const navBar = document.querySelector('.nav-bar');
    const burgerMenu = document.querySelector('.burger-menu');

    if (
      this.isMenuOpen &&
      !navBar?.contains(target) &&
      !burgerMenu?.contains(target)
    ) {
      this.isMenuOpen = false;
    }
  }
}
