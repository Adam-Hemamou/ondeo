import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [NgFor],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent {
  currentPage = 0;
  testimonials = [
    {
      name: 'Nathanaël Chouraki',
      title: "Founder That's Y Media",
      feedback:
        '“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants! ...”',
      photo: '/png/profil.png',
    },
    {
      name: "Qui d'autres",
      title: 'CEO/CMO',
      feedback:
        '“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants! ...”',
      photo: '/png/utilisateur-1.png',
    },
    {
      name: "Encore quelqu'un",
      title: 'CEO/CMO',
      feedback:
        '“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants! ...”',
      photo: '/png/utilisateur-2.png',
    },
    {
      name: 'Nathanaël Chouraki',
      title: "Founder That's Y Media",
      feedback:
        '“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants! ...”',
      photo: '/png/utilisateur.png',
    },
    {
      name: 'YEEEEEs',
      title: 'CEO/CMO',
      feedback:
        '“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants! ...”',
      photo: '/png/policier.png',
    },
    {
      name: 'YOOOO',
      title: 'CEO/CMO',
      feedback:
        '“Robin et son équipe ont réalisé un travail exceptionnel dans des délais impressionnants! ...”',
      photo: '/png/prisonnier.png',
    },
  ];

  get paginatedTestimonials() {
    const start = this.currentPage * 3;
    return this.testimonials.slice(start, start + 3);
  }

  goToPage(page: number) {
    if (page >= 0 && page < Math.ceil(this.testimonials.length / 3)) {
      this.currentPage = page;
    }
  }
}
