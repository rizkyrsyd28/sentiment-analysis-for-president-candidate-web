import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AspectExtractionPageComponent } from './pages/aspect-extraction-page/aspect-extraction-page.component';
import { AspectClassificationPageComponent } from './pages/aspect-classification-page/aspect-classification-page.component';
import { SentimentClassificationPageComponent } from './pages/sentiment-classification-page/sentiment-classification-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ModelAccuracyPageComponent } from './pages/model-accuracy-page/model-accuracy-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    AspectExtractionPageComponent,
    DashboardPageComponent,
    DropdownComponent,
    ModelAccuracyPageComponent,
    AspectClassificationPageComponent,
    SentimentClassificationPageComponent
  ],
  imports: [CommonModule,BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
