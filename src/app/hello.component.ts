import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'hello',
  template: `
    <h1>Happy Birthday {{ name }}</h1>
    <h2>Be Happy Always!</h2>
  `,
  styles: [
    `
      h1 {
        font-family: Cursive;
      }
      h2 {
        font-family: jokerman;
        text-indent: 40px;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
}
