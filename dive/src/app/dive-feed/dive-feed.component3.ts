import { Component, OnInit, Input } from '@angular/core';
import { Listing } from '../listing/listing';


@Component({
  selector: 'app-dive-feed3',
  templateUrl: './dive-feed.component.html',
  styleUrls: ['./dive-feed.component.css']
})
export class DiveFeedComponent3 implements OnInit {
  @Input() version: string;
  listings: Listing[] = [];

  constructor() {
    const list: Listing = new Listing('Amba', '1997-06-24 2:42 PM', 'Spring rolls', 'Lulu', 'good', 'img5', 2.7);
    this.listings.push(list);
    this.listings.push(new Listing('Bloc', '2000-12-11 2:41 PM', 'Lemon', 'Grocery', 'fresh', 'img6', 6.1));
   }

  ngOnInit() {
  }

  onLike(listing: Listing) {
    listing.like++;
  }

}
