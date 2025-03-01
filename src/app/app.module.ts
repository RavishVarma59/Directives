import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightComponent } from './highlight/highlight.component';
import { HighlightTextDirective } from './Highlight/highlight-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightComponent,
    HighlightTextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
