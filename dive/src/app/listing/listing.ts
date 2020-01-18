export class Listing {
  author: string;
  date: string;
  product: string;
  location: string;
  state: string;
  like: number;
  gps: string;

  constructor(author: string, date: string, product: string, location: string, state: string) {
    this.author = author;
    this.date = date;
    this.product = product;
    this.location = location;
    this.state = state;
    this.like = 0;
  }
 }
