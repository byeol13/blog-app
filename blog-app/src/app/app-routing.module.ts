import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodySectionComponent } from './components/body-section/body-section.component';

const routes: Routes = [
  { path: 'items/:page', component: BodySectionComponent }, 
  { path: '', redirectTo: '/items/1', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
