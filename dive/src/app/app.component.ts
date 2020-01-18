import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dive';
  username = 'Pan';
  view = 'home';

  constructor() {
  }

  public changeView(view): void {
    this.view = view;
  }


}
