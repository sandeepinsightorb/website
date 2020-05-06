import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HiringComponent } from './hiring/hiring.component';
import { NewsComponent } from './news/news.component';
import { OurworkComponent } from './ourwork/ourwork.component';
import { OurworktwoComponent } from './ourworktwo/ourworktwo.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { SinglepostComponent } from './singlepost/singlepost.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    HiringComponent,
    NewsComponent,
    OurworkComponent,
    OurworktwoComponent,
    OurservicesComponent,
    SinglepostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
