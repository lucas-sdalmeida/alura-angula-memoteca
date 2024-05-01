import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { ExcludeThoughtComponent } from './components/thoughts/exclude-thought/exclude-thought.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-thoughts', pathMatch: 'full' },
  { path: 'create-thought', component: CreateThoughtComponent },
  { path: 'list-thoughts', component: ListThoughtsComponent },
  { path: 'thoughts/delete-thought/:id', component: ExcludeThoughtComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
