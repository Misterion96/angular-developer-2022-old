import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Lesson9Module } from './lesson 9/lesson-9.module';

@NgModule({
  imports: [BrowserModule, Lesson9Module],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
