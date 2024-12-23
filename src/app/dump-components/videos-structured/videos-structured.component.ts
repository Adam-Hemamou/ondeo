import { Component, Input, OnInit } from '@angular/core';
import { Videos } from 'src/app/core/types/videos';

@Component({
  selector: 'app-videos-structured',
  standalone: true,
  imports: [],
  templateUrl: './videos-structured.component.html',
  styleUrls: ['./videos-structured.component.scss'],
})
export class VideosStructuredComponent {
  @Input() videoList: Videos[] = [];
}
