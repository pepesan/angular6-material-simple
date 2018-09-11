import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatIconModule,
        MatFormFieldModule, MatDatepickerModule,
        MatNativeDateModule, MatInputModule,
        MatRadioModule, MatSelectModule,
        MatSliderModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MAT_DATE_LOCALE} from '@angular/material/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // Importaciones de Material
    MatCheckboxModule,
    // Campos de Form
    MatInputModule,
    MatFormFieldModule,
    // Campos Datepicker
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    // Botones de Radio
    MatRadioModule,
    // Select
    MatSelectModule,
    // Slider
    MatSliderModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es-ES'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
