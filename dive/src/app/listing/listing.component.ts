import { Component, OnInit, Input } from '@angular/core';
import { Listing } from './listing';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Input() author: string;
  @Input() date: string;
  @Input() product: string;
  @Input() location: string;
  @Input() state: string;

  @Input() list: Listing;

  constructor(author: string, date: string, product: string, location: string, state: string) {
    this.author = this.list.author;
    this.date = this.list.date;
    this.product = this.list.product;
    this.location = this.list.location;
    this.state = this.list.state;
  }

  ngOnInit() {
  }

}
