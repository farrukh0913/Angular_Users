import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './elements/pages/home/home.component';
import { ListComponent } from './elements/pages/users/list/list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
