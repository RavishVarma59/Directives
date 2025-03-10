import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightComponent } from './highlight/highlight.component';
import { HighlightTextDirective } from './highlight/highlight-text.directive';
import { DirectivesComponent } from './directives/directives.component';
import { ReactiveTableComponent } from './reactive-table/reactive-table.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { HighlightElementDirective } from './highlight/highlight-element.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightComponent,
    HighlightTextDirective,
    DirectivesComponent,
    ReactiveTableComponent,
    SearchBarComponent,
    HighlightElementDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
