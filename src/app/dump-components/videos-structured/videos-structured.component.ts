import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos-structured',
  standalone: true,
  imports: [NgClass, NgIf, NgFor],
  templateUrl: './videos-structured.component.html',
  styleUrls: ['./videos-structured.component.scss'],
})
export class VideosStructuredComponent {
  @Input() videoList: any[] = [];
}
