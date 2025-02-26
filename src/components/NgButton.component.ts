// src/components/angular-button/angular-button.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-angular-button',
  standalone: true,
  template: `
    <button class="bg-red-600 text-white shadow-xs hover:bg-red-600/90 h-9 px-4 rounded-md">{{title}}</button>
  `,
})
export class AngularButtonComponent {
  @Input() title: string = 'Angular!';
}