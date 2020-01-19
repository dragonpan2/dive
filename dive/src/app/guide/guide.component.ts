import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  currentGuide: string;

  constructor() {
    this.currentGuide = 'veggieFruit';
   }

  ngOnInit() {
  }

  changeGuide(guide: string) {
      this.currentGuide = guide;
  }

}
