import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos-structured',
  standalone: true,
  imports: [NgClass, NgIf, NgFor],
  templateUrl: './videos-structured.component.html',
  styleUrls: ['./videos-structured.component.scss'],
})
export class VideosStructuredComponent implements OnInit {
  @Input() videoList: any[] = [];
  isLoading: boolean[] = [];

  ngOnInit() {
    this.isLoading = Array(this.videoList.length).fill(true);
  }

  onVideoLoad(index: number) {
    this.isLoading[index] = false;
  }
}
