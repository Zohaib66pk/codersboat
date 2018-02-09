import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { HomeComponent } from './component/home/home.component';

export const router: Routes = [
  { path: '', component: HomeComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);