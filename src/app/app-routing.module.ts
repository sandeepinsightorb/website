import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OurworkComponent } from './ourwork/ourwork.component';
import { OurworktwoComponent } from './ourworktwo/ourworktwo.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { NewsComponent } from './news/news.component';
import { HiringComponent } from './hiring/hiring.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SinglepostComponent } from './singlepost/singlepost.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ourwork', component: OurworkComponent },
  { path: 'our-work-2', component: OurworktwoComponent },
  { path: 'services', component: OurservicesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'hiring', component: HiringComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'single-post', component: SinglepostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
