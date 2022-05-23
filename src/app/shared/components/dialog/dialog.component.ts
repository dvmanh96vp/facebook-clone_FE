import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({
          transform: 'translate(-50%, -50%) scale(1.2)',
          opacity: 0
        }),
        animate('250ms ease-out')
      ]),
      transition('* => void', [
        animate(
          '250ms ease-out',
          style({
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: 0
          })
        )
      ])
    ]),
    trigger('dialog-overlay', [
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('300ms ease-out')
      ]),
      transition('* => void', [
        animate(
          '250ms ease-out',
          style({
            opacity: 0
          })
        )
      ])
    ])
  ]

})
export class DialogComponent implements OnInit {
  @Input() visible!: boolean;
  @Output() visibleChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleClose(): void {
    this.visible = false;
    this.visibleChange.emit(this.visible)
  }

}
