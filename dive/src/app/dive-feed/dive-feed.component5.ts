import { Component, OnInit, Input } from '@angular/core';
import { Listing } from '../listing/listing';


@Component({
  selector: 'app-dive-feed5',
  templateUrl: './dive-feed.component.html',
  styleUrls: ['./dive-feed.component.css']
})
export class DiveFeedComponent5 implements OnInit {
  @Input() version: string;
  listings: Listing[] = [];

  constructor() {
    const list: Listing = new Listing('Amba', '1997-06-24 2:42 PM', 'Anthocyanins', 'Farmer Market', 'good', 'img9', 3.8);
    this.listings.push(list);
    this.listings.push(new Listing('Bloc', '2000-12-11 2:41 PM', 'Soup', 'Cafe', 'fresh', 'img10', 6.4));
   }

  ngOnInit() {
  }

  onLike(listing: Listing) {
    listing.like++;
  }

}
