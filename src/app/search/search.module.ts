import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from './form-search/form-search.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ListOwnersComponentComponent } from './list-owners-component/list-owners-component.component';
import { HttpClientModule } from '@angular/common/http';
import { OwnerService } from './owner.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FormSearchComponent, ListOwnersComponentComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    FormSearchComponent,
    ListOwnersComponentComponent
  ],
  providers: [OwnerService]
})
export class SearchModule { }
