import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing/listing';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {


  listings: Listing[] = [];

  constructor() {
    const list: Listing = new Listing('Amba', '1997-06-24 2:42 PM', 'Pile of trash', 'end of the wrold', 'decomposing');
    this.listings.push(list);
    this.listings.push(new Listing('Bloc', '2000-12-11 2:41 PM', 'Hot dogs', 'The Stand', 'fresh'));
   }

  ngOnInit() {
  }

  onLike(listing: Listing) {
    listing.like++;
  }

}
