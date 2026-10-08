import { Component, HostListener } from '@angular/core';
import { sharedAnimation } from '../core/animations/animation';
import { scrollToSectionCal } from '../../utils/scrolls';
import { LanguageService } from '../i18n/language.service';
import { LanguageSwitcherComponent } from '../i18n/language-switcher.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [LanguageSwitcherComponent],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [sharedAnimation],
})
export class NavComponent {
  isMenuOpen: boolean = false;

  constructor(public i18n: LanguageService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToCalendly() {
    scrollToSectionCal();
  }

  // Ancre préfixée par l'accueil de la langue : avec <base href="/">, un
  // simple "#section" renverrait vers "/" et ferait quitter la page /en
  sectionHref(sectionId: string): string {
    return `${this.i18n.t.routes.home}#${sectionId}`;
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(history.state, '', this.sectionHref(sectionId));
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
