import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: '' , component: NewArrivalsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { 

  
}
