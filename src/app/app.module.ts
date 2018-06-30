import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatListModule
} from '@angular/material';
import { HomeModule } from './home/home.module';

const Components = [AppComponent, HomeComponent, PageNotFoundComponent];

const MaterialModules = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatListModule
];

@NgModule({
  declarations: Components,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HomeModule,
    ...MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
