import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {NgImageSliderModule} from 'ng-image-slider';
import { HomePageComponent} from './Components/home-page/home-page.component';
// import { DemoComponent} from './Components/demo/demo.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { PressComponent } from './Components/press/press.component';
import { AboutDlcComponent } from './Components/about-dlc/about-dlc.component';
import { OurWorldsComponent } from './Components/our-worlds/our-worlds.component';
import { ExperiencesComponent } from './Components/experiences/experiences.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import {MatPaginatorModule} from '@angular/material/paginator';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    PressComponent,
    AboutDlcComponent,
    OurWorldsComponent,
    ExperiencesComponent,
    GalleryComponent,
    // DemoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    NgImageSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
