import { Component, Input } from '@angular/core';
export type ButtonType = 'button' | 'submit';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() type: ButtonType;
  constructor() {
    this.type = 'button';
  }
}
