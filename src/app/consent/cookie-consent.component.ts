import { NgIf } from '@angular/common';
import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConsentChoice, ConsentService } from './consent.service';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss'],
})
export class CookieConsentComponent implements OnDestroy {
  @ViewChild('panel') panel!: ElementRef<HTMLDialogElement>;

  panelOpen = false;
  draft: ConsentChoice = { statistics: false, marketing: false };

  private subscription: Subscription;

  constructor(
    public consent: ConsentService,
    public i18n: LanguageService
  ) {
    this.subscription = this.consent.openPanel$.subscribe(() =>
      this.openPanel()
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openPanel() {
    this.draft = { ...(this.consent.choice ?? this.draft) };
    this.panelOpen = true;
    this.panel.nativeElement.showModal();
  }

  closePanel() {
    this.panel.nativeElement.close();
  }

  acceptAll() {
    this.closePanel();
    this.consent.acceptAll();
  }

  refuseAll() {
    this.closePanel();
    this.consent.refuseAll();
  }

  saveDraft() {
    this.closePanel();
    this.consent.save(this.draft);
  }

  setDraft(category: keyof ConsentChoice, event: Event) {
    this.draft[category] = (event.target as HTMLInputElement).checked;
  }
}
