import { NgFor, NgIf } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Avis } from 'src/app/core/types/avis';

@Component({
  selector: 'app-avis-card',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './avis-card.component.html',
  styleUrls: ['./avis-card.component.scss'],
})
export class AvisCardComponent implements AfterViewInit {
  @Input() avisList!: Avis[];
  @ViewChildren('feedbackElement') feedbackElements!: QueryList<ElementRef>;

  expandedAvisIndex: number | null = null;
  isAnimating = false;

  constructor(private cdr: ChangeDetectorRef) {}

  toggleExpand(avis: Avis, index: number) {
    if (this.isAnimating) return;

    this.isAnimating = true;
    if (this.expandedAvisIndex === index) {
      avis.expanded = false;
      this.expandedAvisIndex = null;
    } else {
      this.avisList.forEach((a) => {
        a.expanded = false;
      });
      avis.expanded = true;
      this.expandedAvisIndex = index;
    }

    this.cdr.detectChanges();
    this.checkOverflow();

    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
  }

  checkOverflow() {
    this.feedbackElements.forEach((element, index) => {
      const nativeElement = element.nativeElement;
      const avis = this.avisList[index];
      avis.showToggle = nativeElement.scrollHeight > nativeElement.clientHeight;
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
    setTimeout(() => {
      this.checkOverflow();
    }, 0);
  }
}
