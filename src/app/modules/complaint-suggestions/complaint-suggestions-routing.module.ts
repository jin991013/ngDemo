import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuggestionListComponent } from './components/suggestion-list/suggestion-list.component';

const routes: Routes = [
  {
    path: 'suggestion-list', component: SuggestionListComponent
  },
  {
    path: '', redirectTo: 'suggestion-list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintSuggestionsRoutingModule { }
