import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintSuggestionsRoutingModule } from './complaint-suggestions-routing.module';
import { SuggestionListComponent } from './components/suggestion-list/suggestion-list.component';


@NgModule({
  declarations: [SuggestionListComponent],
  imports: [
    CommonModule,
    ComplaintSuggestionsRoutingModule
  ]
})
export class ComplaintSuggestionsModule { }
