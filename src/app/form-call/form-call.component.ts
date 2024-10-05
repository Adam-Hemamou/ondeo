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

  isButtonDisabled = false;
  toggleForm() {
    this.isButtonDisabled = true; // Désactiver le bouton
    this.formVisible = !this.formVisible;

    const formElement =
      this.formContainer.nativeElement.querySelector('.contact-form');

    if (this.formVisible) {
      formElement.style.display = 'block'; // Assurez-vous que le formulaire est visible
      requestAnimationFrame(() => {
        formElement.classList.add('open'); // Ajouter une classe pour l'animation d'ouverture
        this.formContainer.nativeElement.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      formElement.classList.remove('open'); // Enlever la classe pour l'animation de fermeture
    }
  }

  onTransitionEnd() {
    // Réactiver le bouton après la transition
    this.isButtonDisabled = false;

    const formElement =
      this.formContainer.nativeElement.querySelector('.contact-form');

    if (!this.formVisible) {
      formElement.style.display = 'none'; // Masquer le formulaire après la fermeture
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
