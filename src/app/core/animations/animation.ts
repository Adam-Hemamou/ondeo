// src/app/animations/animations.ts
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

// Animation partagée pour le formulaire et la FAQ
export const sharedAnimation = trigger('sharedAnimation', [
  state(
    'open',
    style({
      height: '*',
      opacity: 1,
    })
  ),
  state(
    'closed',
    style({
      height: '0',
      opacity: 0,
    })
  ),
  transition('closed <=> open', [animate('0.5s ease-in-out')]),
]);
