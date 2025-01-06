// src/main.ts
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';

import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/features/auth/login/login.component';
import { DashboardComponent } from './app/features/dashboard/dashboard.component';
import { MuseumDetailsComponent } from './app/features/museum/museum-details/museum-details.component';
import { AuthorsListComponent } from './app/features/authors/authors-list/authors-list.component';
import { AuthorDetailComponent } from './app/features/authors/author-detail/author-detail.component';

// To enable production mode, uncomment the following line
/// if (environment.production) { enableProdMode(); }

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: DashboardComponent,
    
    children: [
      { path: 'museum-details', component: MuseumDetailsComponent },
      { path: 'authors', component: AuthorsListComponent },
      { path: 'authors/:id', component: AuthorDetailComponent },
      // TODO: Add more routes here
    ]
  },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient()
  ]
});