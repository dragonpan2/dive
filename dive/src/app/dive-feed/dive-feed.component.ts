import { Component, OnInit, Input } from '@angular/core';
import { Listing } from '../listing/listing';


@Component({
  selector: 'app-dive-feed',
  templateUrl: './dive-feed.component.html',
  styleUrls: ['./dive-feed.component.css']
})
export class DiveFeedComponent implements OnInit {
  @Input() version: string;
  listings: Listing[] = [];

  constructor() {
    const list: Listing = new Listing('Amba', '1997-06-24 2:42 PM', 'Rasberry', 'Mile ends', 'good', 'img1', 1.7);
    this.listings.push(list);
    this.listings.push(new Listing('Bloc', '2000-12-11 2:41 PM', 'Water Melon', 'Mont-Royal', 'fresh', 'img2', 5.1));
   }

  ngOnInit() {
  }

  onLike(listing: Listing) {
    listing.like++;
  }

}
