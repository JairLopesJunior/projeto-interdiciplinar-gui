import { Component } from '@angular/core';

@Component({
  selector: 'app-body-style',
  templateUrl: './body-style.component.html',
  styleUrls: ['./body-style.component.css'],
})
export class BodyStyleComponent {
  static definirOpacity(opacity: string): void {
    let body = document.getElementsByTagName('body')[0];
    body.style.opacity = opacity;
  }
}
