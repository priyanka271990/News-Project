import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './home/top-navbar/top-navbar.component';
import { BannerComponent } from './home/banner/banner.component';
import { TilesSectionComponent } from './home/tiles-section/tiles-section.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    BannerComponent,
    TilesSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
