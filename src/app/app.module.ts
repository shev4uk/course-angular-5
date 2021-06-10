import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MetrPipe } from './metr.pipe';
import { SortArrayPipe } from './sort-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MetrPipe,
    SortArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
