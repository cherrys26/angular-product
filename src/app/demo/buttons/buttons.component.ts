import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
  <button mat-button>
  <mat-icon>face</mat-icon>
  Click me please
</button>
<mat-checkbox>Check me!</mat-checkbox>
  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
