import { Component, inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>
    <noscript>
      <iframe
        [attr.src]="safeGtmUrl"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe>
    </noscript>`,
})
export class AppComponent implements OnInit {
  gtmId = import.meta.env['VITE_GTM_ID'];
  safeGtmUrl!: SafeResourceUrl;

  private sanitizer = inject(DomSanitizer);

  ngOnInit() {
    if (this.gtmId) {
      const rawUrl = `https://www.googletagmanager.com/ns.html?id=${this.gtmId}`;
      this.safeGtmUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
    }

    AOS.init({
      duration: 1200,
      once: true,
    });

    if (this.gtmId) {
      const script = document.createElement('script');
      script.async = true;
      script.innerHTML = `
        (function(w,d,s,l,i){
          w[l]=w[l]||[];
          w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${this.gtmId}');
      `;
      document.head.appendChild(script);
    }
  }
}
