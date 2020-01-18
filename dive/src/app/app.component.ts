import { Component } from '@angular/core';
import { ListingComponent } from './listing/listing.component';
import { Listing } from './listing/listing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dive';

  constructor() {
  }


}
