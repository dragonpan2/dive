import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing/listing';


@Component({
  selector: 'app-dive-feed',
  templateUrl: './dive-feed.component.html',
  styleUrls: ['./dive-feed.component.css']
})
export class DiveFeedComponent implements OnInit {

  listings: Listing[] = [];

  constructor() {
    const list: Listing = new Listing('Amba', '1997-06-24 2:42 PM', 'Pile of trash', 'end of the wrold', 'decomposing', 'img1');
    this.listings.push(list);
    this.listings.push(new Listing('Bloc', '2000-12-11 2:41 PM', 'Hot dogs', 'The Stand', 'fresh', 'img2'));
   }

  ngOnInit() {
  }

  onLike(listing: Listing) {
    listing.like++;
  }

}
