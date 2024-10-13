import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Avis } from 'src/app/core/types/avis';

@Component({
  selector: 'app-avis-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './avis-card.component.html',
  styleUrls: ['./avis-card.component.scss'],
})
export class AvisCardComponent {
  @Input() avisList!: Avis[];
}
