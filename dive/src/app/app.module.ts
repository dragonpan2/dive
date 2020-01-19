import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { ListingsComponent } from './listings/listings.component';
import { DiveFeedComponent } from './dive-feed/dive-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    ListingsComponent,
    DiveFeedComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
