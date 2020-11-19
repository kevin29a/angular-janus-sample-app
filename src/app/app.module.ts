import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { JanusModule } from 'janus-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JanusModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
