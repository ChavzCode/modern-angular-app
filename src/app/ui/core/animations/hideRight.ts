import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const dropdown = [
  trigger('dropdown', [
    state(
      'down',
      style({
        height: 'fit-content',
        opacity: 1,
      })
    ),
    state(
      'up',
      style({
        height: '0px',
        opacity: 0,
      })
    ),
    transition('down => up', [animate('0.3s')]),
    transition('up => down', [animate('0.3s')]),
  ]),
];
