import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';


export const router: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactComponent },
  
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);