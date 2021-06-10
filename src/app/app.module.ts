import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarkDirective } from './mark.directive';
import { AddImageDirective } from './add-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    MarkDirective,
    AddImageDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
