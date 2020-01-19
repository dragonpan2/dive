import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { ListingsComponent } from './listings/listings.component';
import { DiveFeedComponent } from './dive-feed/dive-feed.component';
import { GuideComponent } from './guide/guide.component';
import { DiveFeedComponent2 } from './dive-feed/dive-feed.component2';
import { DiveFeedComponent3 } from './dive-feed/dive-feed.component3';
import { DiveFeedComponent4 } from './dive-feed/dive-feed.component4';
import { DiveFeedComponent5 } from './dive-feed/dive-feed.component5';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    ListingsComponent,
    DiveFeedComponent,
    GuideComponent,
    DiveFeedComponent2,
    DiveFeedComponent3,
    DiveFeedComponent4,
    DiveFeedComponent5,
    MapComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
