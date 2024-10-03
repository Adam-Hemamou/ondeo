import { CommonModule, NgClass } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from '../dump-components/toast/toast.component';

@Component({
  selector: 'app-form-call',
  standalone: true,
  imports: [FormsModule, CommonModule, NgClass, ToastComponent],
  templateUrl: './form-call.component.html',
  styleUrls: ['./form-call.component.scss'],
})
export class FormCallComponent {
  @ViewChild('toast') toast!: ToastComponent;
  @ViewChild('formContainer') formContainer!: ElementRef;

  formVisible = false;
  contactForm = {
    phone: '',
    email: '',
    firstName: '',
  };

  toggleForm() {
    this.formVisible = !this.formVisible;
    if (this.formVisible) {
      setTimeout(() => {
        this.formContainer.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.toast.message = 'Formulaire soumis avec succès !';
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
    // Utilise une expression régulière pour valider l'e-mail
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
