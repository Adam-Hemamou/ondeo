import { CommonModule, NgClass } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from '../dump-components/toast/toast.component';
import emailjs from 'emailjs-com';
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
      let offset = 80;
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1400) {
        offset = 170;
      } else if (screenWidth >= 1000) {
        offset = 150;
      } else if (screenWidth >= 750) {
        offset = 110;
      } else if (screenWidth >= 390) {
        offset = 100;
      }
      window.scrollTo({
        top: buttonPosition - offset,
        behavior: 'smooth',
      });
    }
  }

  async onSubmit() {
    if (this.isFormValid()) {
      try {
        const response = await emailjs.send(
          'service_hsn8gsn',
          'template_psxmz93',
          this.contactForm,
          '6N5X4_iC3Rs8YPoAy'
        );
        this.toast.message = 'Vos informations nous ont été transmises';
        this.toast.type = 'success';
        this.toast.showToast();
      } catch (error) {
        this.toast.message = "Erreur lors de l'envoi de l'email.";
        this.toast.type = 'error';
        this.toast.showToast();
        console.error("Erreur lors de l'envoi de l'email:", error);
      }
    } else {
      this.toast.message =
        'Erreur : Veuillez corriger les champs du formulaire.';
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
