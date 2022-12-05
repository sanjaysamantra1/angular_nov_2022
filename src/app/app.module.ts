import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CenterComponent } from './components/center/center.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardsComponent } from './components/cards/cards.component';
import { OrdinalPipe } from './custom-pipes/ordinal.pipe';

@NgModule({
  // components,pipes,directives
  declarations: [
    AppComponent,
    HeaderComponent,
    CenterComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    CardsComponent,
    OrdinalPipe,
  ],
  // dependent modules
  imports: [BrowserModule, AppRoutingModule],
  // Injectables (Services)
  providers: [],
  // which comp to load
  bootstrap: [AppComponent],
})
export class AppModule {}
