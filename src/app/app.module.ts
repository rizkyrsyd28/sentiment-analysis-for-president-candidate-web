import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AspectExtractionPageComponent } from './pages/aspect-extraction-page/aspect-extraction-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ModelAccuracyPageComponent } from './pages/model-accuracy-page/model-accuracy-page.component';
import { AspectClassificationComponent } from './pages/aspect-classification/aspect-classification.component';
import { SentimentClassificationComponent } from './pages/sentiment-classification/sentiment-classification.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    AspectExtractionPageComponent,
    DashboardPageComponent,
    ModelAccuracyPageComponent,
    AspectClassificationComponent,
    SentimentClassificationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
