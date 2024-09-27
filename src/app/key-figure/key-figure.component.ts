import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-key-figure',
  standalone: true,
  imports: [NgIf],
  templateUrl: './key-figure.component.html',
  styleUrls: ['./key-figure.component.scss'],
})
export class KeyFigureComponent {
  @Input() isMobile!: boolean;
}
