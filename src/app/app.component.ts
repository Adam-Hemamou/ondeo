import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1200, // Duration of animation (in ms)
      once: true, // Whether animation should happen only once or every time you scroll
    });
  }
}
