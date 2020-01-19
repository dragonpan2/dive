export class Listing {
  author: string;
  date: string;
  product: string;
  location: string;
  state: string;
  like: number;
  gps: string;
  img: string;
  km: number;

  constructor(author: string, date: string, product: string, location: string, state: string, img: string, km: number) {
    this.author = author;
    this.date = date;
    this.product = product;
    this.location = location;
    this.state = state;
    this.like = 0;
    this.img = img;
    this.km = km;
  }
 }
