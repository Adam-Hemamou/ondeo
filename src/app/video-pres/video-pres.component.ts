import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-pres',
  standalone: true,
  imports: [NgIf],
  templateUrl: './video-pres.component.html',
  styleUrls: ['./video-pres.component.scss'],
})
export class VideoPresComponent {
  @Input() isMobile!: boolean;

  isLoading = true; // Par défaut, le squelette s'affiche

  onVideoLoad() {
    this.isLoading = false; // Masquer le squelette une fois la vidéo chargée
  }
}
