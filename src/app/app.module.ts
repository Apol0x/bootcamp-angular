import { Routes, RouterModule } from '@angular/router';
import { SearchModule } from './search/search.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/* import { SearchComponent } from './search/search.component'; */
import { DataService } from './data.service';
import { HomeComponent } from './components/home/home.component';
import { VetsComponent } from './components/vets/vets.component';
import { DetailOwnerComponent } from './components/detail-owner/detail-owner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VetsComponent,
    DetailOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    SearchModule,
    RouterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
