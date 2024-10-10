import { Component, Input } from '@angular/core';
// import { SafeUrlPipe } from 'src/app/core/pipes/safe-url.pipe';

@Component({
  selector: 'app-simple-video',
  standalone: true,
  imports: [],
  templateUrl: './simple-video.component.html',
  styleUrls: ['./simple-video.component.scss'],
})
export class SimpleVideoComponent {
  @Input() videoUrl: string = '';
}
