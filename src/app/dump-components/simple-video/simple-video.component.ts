import { Component, Input } from '@angular/core';
import { SafeUrlPipe } from '../../core/pipes/safe-url.pipe';

@Component({
  selector: 'app-simple-video',
  standalone: true,
  imports: [SafeUrlPipe],
  templateUrl: './simple-video.component.html',
  styleUrls: ['./simple-video.component.scss'],
})
export class SimpleVideoComponent {
  @Input() videoUrl: string = '';
}
