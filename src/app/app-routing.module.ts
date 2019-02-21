import { DetailOwnerComponent } from './components/detail-owner/detail-owner.component';
import { VetsComponent } from './components/vets/vets.component';
import { FormSearchComponent } from './search/form-search/form-search.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOwnersComponentComponent } from './search/list-owners-component/list-owners-component.component';

const routes: Routes = [
 /*  {
    path: '',
    component: AppComponent
  }, */
  {
    path: 'search',
   component: FormSearchComponent
  },
  {
    path: 'owners',
    component: ListOwnersComponentComponent
  },
  {
    path: 'vets',
    component: VetsComponent
  },
  {
    path: 'owners/:id',
    component: DetailOwnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
