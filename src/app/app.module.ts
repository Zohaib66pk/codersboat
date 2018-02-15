import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { ContactComponent } from './component/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    routes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
