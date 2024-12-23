import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-pres',
  standalone: true,
  imports: [],
  templateUrl: './video-pres.component.html',
  styleUrls: ['./video-pres.component.scss'],
})
export class VideoPresComponent {
  @Input() isMobile!: boolean;
}
