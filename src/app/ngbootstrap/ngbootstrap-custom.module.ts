import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from '../components/home/home.component';
@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent, NgbModule],
  bootstrap: [HomeComponent],
  imports: [BrowserModule, FormsModule, NgbModule],
})
export class DatepickerPopupModule {}
