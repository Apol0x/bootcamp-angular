import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/* import { SearchComponent } from './search/search.component'; */
import { DataService } from './data.service';
import { FormSearchComponent } from './search/form-search/form-search.component';
import { ListOwnersComponentComponent } from './search/list-owners-component/list-owners-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSearchComponent,
    ListOwnersComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
