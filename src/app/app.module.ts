import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AngularMaterialModule } from './angular-material.module';
import { AspectExtractionPageComponent } from './pages/aspect-extraction-page/aspect-extraction-page.component';
import { ButtonComponent } from './components/button/button.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    AspectExtractionPageComponent,
    ButtonComponent,
    DashboardPageComponent,

  ],
  imports: [BrowserModule, AppRoutingModule,AngularMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
