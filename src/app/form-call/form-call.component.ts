import { CommonModule, NgClass } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from '../dump-components/toast/toast.component';

import { sharedAnimation } from '../core/animations/animation';

@Component({
  selector: 'app-form-call',
  standalone: true,
  imports: [FormsModule, CommonModule, NgClass, ToastComponent],
  templateUrl: './form-call.component.html',
  styleUrls: ['./form-call.component.scss'],
  animations: [sharedAnimation],
})
export class FormCallComponent {
  @ViewChild('toast') toast!: ToastComponent;
  @ViewChild('formButton') formButton!: ElementRef;

  formVisible = false;
  contactForm = {
    phone: '',
    email: '',
    firstName: '',
  };

  toggleForm() {
    this.formVisible = !this.formVisible;
    if (this.formVisible) {
      this.scrollToButton();
    }
  }

  scrollToButton() {
    if (this.formButton) {
      const buttonPosition =
        this.formButton.nativeElement.getBoundingClientRect().top +
        window.scrollY;
      const offset = 80; // Décalage de 80px au-dessus du bouton
      window.scrollTo({
        top: buttonPosition - offset,
        behavior: 'smooth',
      });
    }
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.toast.message = 'vos information nous ont été transimises';
      this.toast.type = 'success';
      this.toast.showToast();
    } else {
      this.toast.message =
        'Erreur : veuillez corriger les champs du formulaire.';
      this.toast.type = 'error';
      this.toast.showToast();
    }
  }

  isPhoneValid() {
    const phonePattern = /^[0-9]+$/;
    return this.contactForm.phone && phonePattern.test(this.contactForm.phone);
  }

  isEmailValid() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return this.contactForm.email && emailPattern.test(this.contactForm.email);
  }

  isFirstNameValid() {
    return this.contactForm.firstName && this.contactForm.firstName.length >= 2; // Vérifie que le prénom a au moins 2 lettres
  }

  isFormValid() {
    return (
      this.isPhoneValid() && this.isEmailValid() && this.isFirstNameValid()
    );
  }
}
