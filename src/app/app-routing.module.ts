import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDlcComponent } from './Components/about-dlc/about-dlc.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { PressComponent } from './Components/press/press.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'press', component: PressComponent},
  {path: 'about-dlc', component: AboutDlcComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
