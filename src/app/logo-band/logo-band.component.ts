import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-logo-band',
  standalone: true,
  imports: [NgFor],
  templateUrl: './logo-band.component.html',
  styleUrls: ['./logo-band.component.scss'],
})
export class LogoBandComponent {
  logos = [
    { src: '/logos/m6.png', name: 'M6' },
    { src: '/logos/bangumi.png', name: 'bangumi' },
    { src: '/logos/blue-lemon.png', name: 'blue lemon' },
    { src: '/logos/docaposte.png', name: 'docapost' },
    { src: '/logos/ias.png', name: 'ia-school' },
    { src: '/logos/iseg.png', name: 'ISEG' },
    { src: '/logos/equans.png', name: 'Equans' },
    { src: '/logos/bouygues.svg.webp', name: 'Bouygues' },
    { src: '/logos/bpi.png', name: 'BPI' },
    { src: '/logos/caisse_depargne.png', name: "caisse d'épargne" },
    { src: '/logos/carlsberg.png', name: 'Carlsberg' },
    { src: '/logos/danone.png', name: 'danone' },
    { src: '/logos/france5.png', name: 'France 5' },
    { src: '/logos/green-got.png', name: 'Green Got' },
    { src: '/logos/groupama.png', name: 'Groupama' },
    { src: '/logos/Olympics.png', name: 'JO Paris 2024' },
    { src: '/logos/sneakmart.png', name: 'Sneakmart' },
    { src: '/logos/TMC.png', name: 'TMC' },
    { src: '/logos/talessed.png', name: 'taleseed' },
    { src: '/logos/arcachon.png', name: "mairie d'arcachon" },
    { src: '/logos/france2.png', name: 'France 2' },
    { src: '/logos/powellsoftware.png', name: 'powell software' },
    { src: '/logos/skills_place.png', name: 'skills place' },
    { src: '/logos/french-med.png', name: 'french-med' },
  ];

  constructor(public i18n: LanguageService) {}
}
