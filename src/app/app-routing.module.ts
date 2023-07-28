import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AspectExtractionPageComponent } from './pages/aspect-extraction-page/aspect-extraction-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AspectClassificationPageComponent }from './pages/aspect-classification-page/aspect-classification-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'aspect-extraction', component: AspectExtractionPageComponent },
  { path: 'aspect-classification', component: AspectClassificationPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
