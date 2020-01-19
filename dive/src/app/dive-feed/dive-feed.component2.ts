import { Component, OnInit, Input } from '@angular/core';
import { Listing } from '../listing/listing';


@Component({
  selector: 'app-dive-feed2',
  templateUrl: './dive-feed.component.html',
  styleUrls: ['./dive-feed.component.css']
})
export class DiveFeedComponent2 implements OnInit {
  @Input() version: string;
  listings: Listing[] = [];

  constructor() {
    const list: Listing = new Listing('Amba', '1997-06-24 2:42 PM', 'Croissants', 'C[otes-des-neiges', 'good', 'img3', 2.4);
    this.listings.push(list);
    this.listings.push(new Listing('Bloc', '2000-12-11 2:41 PM', 'Strawberries', 'Ahunstic', 'fresh', 'img4', 5.6));
   }

  ngOnInit() {
  }

  onLike(listing: Listing) {
    listing.like++;
  }

}
