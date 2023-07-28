import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AspectExtractionPageComponent } from './pages/aspect-extraction-page/aspect-extraction-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ModelAccuracyPageComponent } from './pages/model-accuracy-page/model-accuracy-page.component';
import { AspectClassificationComponent } from './pages/aspect-classification/aspect-classification.component';
import { SentimentClassificationComponent } from './pages/sentiment-classification/sentiment-classification.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'aspect-extraction', component: AspectExtractionPageComponent },
  { path: 'aspect-classification', component: AspectClassificationComponent },
  {
    path: 'sentiment-classification',
    component: SentimentClassificationComponent,
  },
  { path: 'model-accuracy', component: ModelAccuracyPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
