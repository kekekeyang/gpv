import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import G2 from '@antv/g2';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    G2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
