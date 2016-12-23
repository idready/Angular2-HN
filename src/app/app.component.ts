import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  // The rule below avoid style encapsulation and allow golbal styling, 
  //or just include css file in the html file.
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
