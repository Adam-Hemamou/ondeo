import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-videos-structured',
  standalone: true,
  imports: [NgClass],
  templateUrl: './videos-structured.component.html',
  styleUrls: ['./videos-structured.component.scss'],
})
export class VideosStructuredComponent {
  @Input() videoList: any[] = [];
}
